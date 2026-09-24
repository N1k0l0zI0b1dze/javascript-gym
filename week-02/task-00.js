const transactions = [
  { id: 1, title: "Salary", amount: 1500, type: "income" },
  { id: 2, title: "Food", amount: 120, type: "expense" },
  { id: 3, title: "Freelance", amount: 400, type: "income" },
  { id: 4, title: "Internet", amount: 50, type: "expense" },
];

// const getAllIncome = (arr) => {
//   let summary = 0;
//?   arr.map((e) => {     -------------------------------> ცუდი ვარიანტია რადგან map() გააკეთებს ახალ array-ს უმჯობესია forEach
//?                                                         ან reduce.
//    e.type === "income" ? (summary += e.amount) : "";
//   });

//   return summary;
// };

const getAllIncome = (arr) => {
  return arr.reduce((acc, currentValue) => {
    if (currentValue.type === "income") {
      return acc + currentValue.amount;
    }

    return acc;
  }, 0);
};

console.log(getAllIncome(transactions));

const getBalances = (arr) => {
  return arr.reduce((acc, currentValue) => {
    if (currentValue.type === "income") return acc + currentValue.amount;
    if (currentValue.type === "expense") return acc - currentValue.amount;

    return acc;
  }, 0);
};

console.log(getBalances(transactions));

const getExpenses = (arr) => {
  return arr.filter((transaction) => transaction.type === "expense");
};

console.log(getExpenses(transactions));

const getLargestTransaction = (arr) => {
  return arr.reduce((acc, currentValue) => {
    if (currentValue.amount > acc.amount) {
      return currentValue;
    }

    return acc;
  }, arr[0]);
};
