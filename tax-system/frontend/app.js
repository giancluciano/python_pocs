function calculateTaxes(product) {
  return product.taxes.map(function (taxKey) {
    const tax = TAXES[taxKey];
    return {
      name: tax.name,
      rate: tax.rate,
      amount: product.basePrice * tax.rate,
    };
  });
}

function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

function renderProducts() {
  const tbody = document.getElementById("product-list");

  const rows = PRODUCTS.map(function (product) {
    const taxes = calculateTaxes(product);
    const totalTax = taxes.reduce(function (sum, t) { return sum + t.amount; }, 0);
    const total = product.basePrice + totalTax;

    const taxItems = taxes
      .map(function (t) {
        return '<li><span class="tax-name">' + t.name + " (" + (t.rate * 100) + '%)</span>' +
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

renderProducts();
