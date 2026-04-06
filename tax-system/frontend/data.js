const TAXES = {
  vat: { name: "VAT", rate: 0.21 },
  sales: { name: "Sales Tax", rate: 0.08 },
  luxury: { name: "Luxury Tax", rate: 0.15 },
  eco: { name: "Eco Tax", rate: 0.05 },
  sugar: { name: "Sugar Tax", rate: 0.10 },
  import: { name: "Import Duty", rate: 0.12 },
};

const PRODUCTS = [
  {
    name: "Laptop",
    category: "Electronics",
    basePrice: 999.99,
    taxes: ["vat", "sales", "import"],
  },
  {
    name: "Organic Coffee (1kg)",
    category: "Food & Beverage",
    basePrice: 24.50,
    taxes: ["vat", "sales"],
  },
  {
    name: "Designer Handbag",
    category: "Luxury Goods",
    basePrice: 1250.00,
    taxes: ["vat", "sales", "luxury", "import"],
  },
  {
    name: "Soda Pack (12 cans)",
    category: "Food & Beverage",
    basePrice: 6.99,
    taxes: ["vat", "sales", "sugar"],
  },
  {
    name: "Electric Scooter",
    category: "Transport",
    basePrice: 450.00,
    taxes: ["vat", "sales", "eco"],
  },
  {
    name: "Smartphone",
    category: "Electronics",
    basePrice: 799.00,
    taxes: ["vat", "sales", "import"],
  },
  {
    name: "Swiss Watch",
    category: "Luxury Goods",
    basePrice: 3500.00,
    taxes: ["vat", "sales", "luxury", "import"],
  },
  {
    name: "Running Shoes",
    category: "Apparel",
    basePrice: 120.00,
    taxes: ["vat", "sales"],
  },
];
