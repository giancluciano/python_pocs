const STATES = [
  { code: "CA", name: "California" },
  { code: "NY", name: "New York" },
  { code: "TX", name: "Texas" },
  { code: "FL", name: "Florida" },
  { code: "WA", name: "Washington" },
  { code: "IL", name: "Illinois" },
];

const YEARS = [2024, 2025, 2026];

const TAX_RATES_BY_STATE_YEAR = {
  CA: {
    2024: { vat: 0.21, sales: 0.0725, luxury: 0.15, eco: 0.05, sugar: 0.10, import: 0.12 },
    2025: { vat: 0.21, sales: 0.0750, luxury: 0.15, eco: 0.06, sugar: 0.10, import: 0.12 },
    2026: { vat: 0.22, sales: 0.0775, luxury: 0.16, eco: 0.06, sugar: 0.11, import: 0.13 },
  },
  NY: {
    2024: { vat: 0.21, sales: 0.08, luxury: 0.15, eco: 0.05, sugar: 0.10, import: 0.12 },
    2025: { vat: 0.21, sales: 0.08, luxury: 0.16, eco: 0.05, sugar: 0.11, import: 0.12 },
    2026: { vat: 0.22, sales: 0.085, luxury: 0.16, eco: 0.06, sugar: 0.11, import: 0.13 },
  },
  TX: {
    2024: { vat: 0.21, sales: 0.0625, luxury: 0.14, eco: 0.04, sugar: 0.08, import: 0.11 },
    2025: { vat: 0.21, sales: 0.0625, luxury: 0.14, eco: 0.05, sugar: 0.09, import: 0.11 },
    2026: { vat: 0.22, sales: 0.065, luxury: 0.15, eco: 0.05, sugar: 0.09, import: 0.12 },
  },
  FL: {
    2024: { vat: 0.21, sales: 0.06, luxury: 0.13, eco: 0.04, sugar: 0.08, import: 0.10 },
    2025: { vat: 0.21, sales: 0.06, luxury: 0.14, eco: 0.04, sugar: 0.08, import: 0.11 },
    2026: { vat: 0.22, sales: 0.065, luxury: 0.14, eco: 0.05, sugar: 0.09, import: 0.11 },
  },
  WA: {
    2024: { vat: 0.21, sales: 0.065, luxury: 0.15, eco: 0.06, sugar: 0.10, import: 0.12 },
    2025: { vat: 0.21, sales: 0.065, luxury: 0.15, eco: 0.07, sugar: 0.10, import: 0.12 },
    2026: { vat: 0.22, sales: 0.07, luxury: 0.16, eco: 0.07, sugar: 0.11, import: 0.13 },
  },
  IL: {
    2024: { vat: 0.21, sales: 0.0625, luxury: 0.14, eco: 0.05, sugar: 0.10, import: 0.11 },
    2025: { vat: 0.21, sales: 0.0625, luxury: 0.15, eco: 0.05, sugar: 0.10, import: 0.12 },
    2026: { vat: 0.22, sales: 0.065, luxury: 0.15, eco: 0.06, sugar: 0.11, import: 0.12 },
  },
};

const TAX_NAMES = {
  vat: "VAT",
  sales: "Sales Tax",
  luxury: "Luxury Tax",
  eco: "Eco Tax",
  sugar: "Sugar Tax",
  import: "Import Duty",
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
