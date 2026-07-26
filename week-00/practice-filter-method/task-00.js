const products = [
  {
    id: 1,
    name: "Laptop",
    price: 2500,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Mouse",
    price: 80,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Desk",
    price: 600,
    category: "Furniture",
    inStock: false,
  },
  {
    id: 4,
    name: "Chair",
    price: 350,
    category: "Furniture",
    inStock: true,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 150,
    category: "Electronics",
    inStock: false,
  },
];

//! ამოცანა 1 — მხოლოდ მარაგში არსებული იაფი პროდუქტები

// დატოვე მხოლოდ ის პროდუქტები, რომლებიც:

// inStock === true

// და

// price < 500

// მოსალოდნელი შედეგი:

// [
//   {
//     id: 2,
//     name: "Mouse",
//     price: 80,
//     category: "Electronics",
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "Chair",
//     price: 350,
//     category: "Furniture",
//     inStock: true,
//   },
// ]

const cheapInStockProducts = products.filter((product) => {
  return product.price < 500 && product.inStock === true;
});

console.log(cheapInStockProducts);

//! ამოცანა 2 — მხოლოდ Electronics კატეგორიის ძვირი პროდუქტები

// დატოვე მხოლოდ ის პროდუქტები, რომლებიც:

// category === "Electronics"

// და

// price >= 100

// მოსალოდნელი შედეგი:

// [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 2500,
//     category: "Electronics",
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: "Keyboard",
//     price: 150,
//     category: "Electronics",
//     inStock: false,
//   },
// ]

const electronicExpensiveProducts = products.filter((product) => {
  return product.category === "Electronics" && product.price >= 100;
});

console.log(electronicExpensiveProducts);
