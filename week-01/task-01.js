const transactions = [
  {
    id: 1,
    title: "Salary",
    amount: 2500,
    type: "income",
    category: "Work",
    completed: true,
  },
  {
    id: 2,
    title: "Groceries",
    amount: 180,
    type: "expense",
    category: "Food",
    completed: true,
  },
  {
    id: 3,
    title: "Freelance",
    amount: 700,
    type: "income",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    title: "Internet",
    amount: 60,
    type: "expense",
    category: "Bills",
    completed: true,
  },
  {
    id: 5,
    title: "Restaurant",
    amount: 90,
    type: "expense",
    category: "Food",
    completed: false,
  },
  {
    id: 6,
    title: "Electricity",
    amount: 120,
    type: "expense",
    category: "Bills",
    completed: true,
  },
];

//! filter — ამოცანა 1

// დატოვე მხოლოდ დასრულებული ხარჯები.

// პირობები:

// type უნდა იყოს "expense"
// completed უნდა იყოს true

// მოსალოდნელი შედეგი შეიცავს:

// Groceries
// Internet
// Electricity

// გამოიყენე მხოლოდ filter.

const completed = transactions.filter((item) => {
  return item.completed === true && item.type === "expense";
});

console.log(completed);

//! filter — ამოცანა 2

// დატოვე მხოლოდ ის ტრანზაქციები, რომლებიც:

// category არის "Food"
// და
// amount ნაკლებია 150-ზე

// მოსალოდნელ შედეგში უნდა იყოს მხოლოდ:

// Restaurant

// მარაგის ან completed-ის მდგომარეობას ამ ამოცანაში მნიშვნელობა არ აქვს.

const foodAndUnderOneFifty = transactions.filter((item) => {
  return item.category === "Food" && item.amount < 150;
});
console.log(foodAndUnderOneFifty);

//! reduce — ამოცანა 1

// დათვალე ყველა დასრულებული ხარჯის საერთო თანხა.

// უნდა გაითვალისწინო მხოლოდ:

// type === "expense"
// completed === true

// მოსალოდნელი შედეგი:

// 360

// რადგან:

// 180 + 60 + 120 = 360

// გამოიყენე მხოლოდ ერთი reduce, filter-ის გარეშე.

const count = (acc, currentValue) => {
  if (currentValue.type === "expense" && currentValue.completed === true) {
    return acc + currentValue.amount;
  }

  return acc;
};

const sumOfCompletedItems = transactions.reduce(count, 0);
console.log(sumOfCompletedItems);

//! reduce — ამოცანა 2

// იპოვე ყველაზე დიდი დასრულებული შემოსავალი.

// პირობები:

// type === "income"
// completed === true

// უნდა დაბრუნდეს მთელი ობიექტი და არა მხოლოდ amount.

// მოსალოდნელი შედეგი არის Salary ობიექტი.

// Initial value გამოიყენე:

// null

// გაიხსენე accumulator-ის ინვარიანტი:

// acc არის null
// ან
// აქამდე ნაპოვნი ყველაზე დიდი დასრულებული income

const getBiggestCompletedIncome = (acc, currentValue) => {
  if (currentValue.type !== "income" || currentValue.completed !== true) {
    return acc;
  }

  if (acc === null) {
    return currentValue;
  }

  return acc.amount > currentValue.amount ? acc : currentValue;
};

//! reduce — ამოცანა 3

// დათვალე ტრანზაქციების რაოდენობა კატეგორიების მიხედვით.

// მოსალოდნელი შედეგი:

// {
//   Work: 2,
//   Food: 2,
//   Bills: 2,
// }

// Accumulator-ის საწყისი მნიშვნელობა:

// {}

// ლოგიკა:

// თუ category ჯერ არ არსებობს → შექმენი და ჩაწერე 1
// თუ უკვე არსებობს → გაზარდე 1-ით

const getCountTransactionsByCategory = (acc, currentValue) => {
  const category = currentValue.category;

  if (acc[category] === undefined) {
    acc[category] = 1;
  } else {
    acc[category]++;
  }

  return acc;
};

const countTransactionsByCategory = transactions.reduce(
  getCountTransactionsByCategory,
  {},
);

console.log(countTransactionsByCategory);
