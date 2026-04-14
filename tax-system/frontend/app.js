var STATE = {
  states: [],
  years: [],
  taxNames: {},
  taxRates: {},
  products: [],
};

function getSelectedState() {
  return document.getElementById("state-select").value;
}

function getSelectedYear() {
  return parseInt(document.getElementById("year-select").value, 10);
}

function calculateTaxes(product, stateCode, year) {
  var rates = STATE.taxRates[stateCode][year];
  return product.taxes.map(function (taxKey) {
    var rate = rates[taxKey];
    return {
      name: STATE.taxNames[taxKey],
      rate: rate,
      amount: product.basePrice * rate,
    };
  });
}

function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

function renderProducts() {
  var stateCode = getSelectedState();
  var year = getSelectedYear();
  var tbody = document.getElementById("product-list");

  var rows = STATE.products.map(function (product) {
    var taxes = calculateTaxes(product, stateCode, year);
    var totalTax = taxes.reduce(function (sum, t) { return sum + t.amount; }, 0);
    var total = product.basePrice + totalTax;

    var taxItems = taxes
      .map(function (t) {
        return '<li><span class="tax-name">' + t.name + " (" + (t.rate * 100).toFixed(2) + '%)</span>' +
          '<span class="tax-amount">+' + formatCurrency(t.amount) + "</span></li>";
      })
      .join("");

    return (
      "<tr>" +
      "<td>" + product.name + "</td>" +
      "<td>" + product.category + "</td>" +
      '<td class="price">' + formatCurrency(product.basePrice) + "</td>" +
      '<td><ul class="tax-list">' + taxItems + "</ul></td>" +
      '<td class="total">' + formatCurrency(total) + "</td>" +
      "</tr>"
    );
  }).join("");

  tbody.innerHTML = rows;
}

function populateSelectors() {
  var stateSelect = document.getElementById("state-select");
  STATE.states.forEach(function (state) {
    var option = document.createElement("option");
    option.value = state.code;
    option.textContent = state.name;
    stateSelect.appendChild(option);
  });

  var yearSelect = document.getElementById("year-select");
  STATE.years.forEach(function (year) {
    var option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  stateSelect.addEventListener("change", renderProducts);
  yearSelect.addEventListener("change", renderProducts);
}

function normalizeTaxRates(raw) {
  var normalized = {};
  Object.keys(raw).forEach(function (stateCode) {
    normalized[stateCode] = {};
    Object.keys(raw[stateCode]).forEach(function (year) {
      normalized[stateCode][parseInt(year, 10)] = raw[stateCode][year];
    });
  });
  return normalized;
}

function loadCatalog() {
  return fetch("/api/catalog/")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to load catalog: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      STATE.states = data.states;
      STATE.years = data.years;
      STATE.taxNames = data.taxNames;
      STATE.taxRates = normalizeTaxRates(data.taxRates);
      STATE.products = data.products;
      populateSelectors();
      renderProducts();
    })
    .catch(function (err) {
      var tbody = document.getElementById("product-list");
      tbody.innerHTML = '<tr><td colspan="5">Error loading catalog: ' + err.message + "</td></tr>";
    });
}

loadCatalog();
