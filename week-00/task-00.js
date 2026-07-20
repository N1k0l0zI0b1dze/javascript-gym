```
დაწერე ფუნქცია, რომელიც დააბრუნებს:

მხოლოდ იმ პროდუქტების სახელებს, რომლებიც მარაგშია (inStock === true).
ყველა მარაგში არსებული პროდუქტის ჯამურ ფასს.
ყველაზე ძვირადღირებულ პროდუქტს.

პირობა: გამოიყენე მხოლოდ array methods (filter, map, reduce და საჭიროების შემთხვევაში სხვა სტანდარტული მეთოდები). for ციკლი არ გამოიყენო.
```;

const products = [
  { id: 1, name: "Keyboard", price: 120, inStock: true },
  { id: 2, name: "Mouse", price: 80, inStock: false },
  { id: 3, name: "Monitor", price: 450, inStock: true },
  { id: 4, name: "Headphones", price: 150, inStock: true },
];

const isAvailable = (arr) => {
  let total = 0;
  let availableProducts = [];

  arr.map((product) => {
    if (product.inStock === true) {
      availableProducts.push(product.name);
      total = total + product.price;
    }
  });

  return `available products: ${availableProducts}, total: ${total}`;
};

console.log(isAvailable(products));

`AI Version I`;
const products = [
  { id: 1, name: "Keyboard", price: 120, inStock: true },
  { id: 2, name: "Mouse", price: 80, inStock: false },
  { id: 3, name: "Monitor", price: 450, inStock: true },
  { id: 4, name: "Headphones", price: 150, inStock: true },
];

const getProductsSummary = (products) => {
  const availableProducts = products.filter((product) => product.inStock);

  const availableProductNames = availableProducts.map(
    (product) => product.name,
  );

  const totalPrice = availableProducts.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  const mostExpensiveProduct = availableProducts.reduce(
    (mostExpensive, product) =>
      product.price > mostExpensive.price ? product : mostExpensive,
  );

  return {
    availableProductNames,
    totalPrice,
    mostExpensiveProduct,
  };
};

console.log(getProductsSummary(products));

`AI Version II`;

const getProductsSummary = (products) => {
  const availableProducts = products.filter((product) => product.inStock);

  const availableProductNames = availableProducts.map(
    (product) => product.name,
  );

  const totalPrice = availableProducts.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  const mostExpensiveProduct = availableProducts.reduce(
    (mostExpensive, product) => {
      if (mostExpensive === null || product.price > mostExpensive.price) {
        return product;
      }

      return mostExpensive;
    },
    null,
  );

  return {
    availableProductNames,
    totalPrice,
    mostExpensiveProduct,
  };
};
