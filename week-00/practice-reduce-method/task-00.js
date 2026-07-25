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

//! ამოცანა 1 — ფასების ჯამი

// დათვალე ყველა პროდუქტის ფასების ჯამი.

// მოსალოდნელი შედეგი:

// 3680

const countProductPrices = (accumulator, currentValue) => {
  return accumulator + currentValue.price;
};

const summaryOfPrices = products.reduce(countProductPrices, 0);
console.log(summaryOfPrices);

//! ამოცანა 2 — მარაგში არსებული პროდუქტების რაოდენობა

// დათვალე რამდენ პროდუქტს აქვს:

// inStock === true

// მოსალოდნელი შედეგი:

// 3

const countInStock = (accumulator, currentValue) => {
  currentValue.inStock === true && accumulator++;

  return accumulator;
};

const numberOfInStockProducts = products.reduce(countInStock, 0);
console.log(numberOfInStockProducts);

//! ამოცანა 3 — ყველაზე ძვირი პროდუქტი

// იპოვე ყველაზე ძვირი პროდუქტი.

// უნდა დაბრუნდეს მთელი ობიექტი და არა მხოლოდ ფასი.

// მოსალოდნელი შედეგი:

// {
//   id: 1,
//   name: "Laptop",
//   price: 2500,
//   category: "Electronics",
//   inStock: true
// }

const getMostExpensiveProduct = (accumulator, currentValue) =>
  accumulator.price > currentValue.price ? accumulator : currentValue;

const findMostExpensiveProduct = products.reduce(
  getMostExpensiveProduct,
  products[0],
);

console.log(findMostExpensiveProduct);

//! ამოცანა 4 — პროდუქტების სახელების ერთი ტექსტი

// შექმენი ყველა პროდუქტის სახელისგან ერთი ტექსტი.

// მოსალოდნელი შედეგი:

// "Laptop, Mouse, Desk, Chair, Keyboard"

// Accumulator-ის ტიპი ამჯერად იქნება:

// string

// ეცადე, ტექსტის დასაწყისში ან ბოლოში ზედმეტი მძიმე არ დარჩეს.

const getProductNames = (accumulator, currentValue) => {
  return currentValue.id <= products.length && currentValue.id !== 1
    ? accumulator + `,` + " " + currentValue.name
    : accumulator + currentValue.name;
};

const allProductNames = products.reduce(getProductNames, "");
console.log(allProductNames);

//! ამოცანა 5 — პროდუქტების რაოდენობა კატეგორიების მიხედვით

// დათვალე რამდენი პროდუქტია თითოეულ კატეგორიაში.

// მოსალოდნელი შედეგი:

// {
//   Electronics: 3,
//   Furniture: 2
// }

// აქ accumulator უნდა იყოს ობიექტი:

// {}

const getProductsByCategory = (accumulator, currentValue) => {
  if (accumulator[currentValue.category] === undefined)
    accumulator[currentValue.category] = 1;
  else accumulator[currentValue.category] += 1;

  return accumulator;
};

const countProductsByCategory = products.reduce(getProductsByCategory, {});

console.log(countProductsByCategory);
