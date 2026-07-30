const goals = [
  { title: "Laptop", progress: 76 },
  { title: "Keyboard", progress: 100 },
  { title: "Trip", progress: 72 },
];

//! 1. filter

// დატოვე მხოლოდ ის goals, რომელთა progress ნაკლებია 100-ზე.

const progressLessThanHundread = goals.filter((goal) => {
  return goal.progress < 100;
});

console.log(progressLessThanHundread);

//! 2. reduce

// დათვალე ყველა goal-ის savedAmount-ის ჯამი.

const getSavedAmount = (acc, currentValue) => {
  return acc + currentValue.progress;
};

const savedAmount = goals.reduce(getSavedAmount, 0);
console.log(savedAmount);
