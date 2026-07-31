const goals = [
  {
    id: 1,
    title: "MacBook Pro",
    category: "Technology",
    savedAmount: 1900,
    targetAmount: 2499,
    progress: 76,
    completed: false,
  },
  {
    id: 2,
    title: "React Conference",
    category: "Travel",
    savedAmount: 1299,
    targetAmount: 1800,
    progress: 72,
    completed: false,
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    category: "Technology",
    savedAmount: 350,
    targetAmount: 350,
    progress: 100,
    completed: true,
  },
  {
    id: 4,
    title: "Emergency Fund",
    category: "Finance",
    savedAmount: 4000,
    targetAmount: 5000,
    progress: 80,
    completed: false,
  },
  {
    id: 5,
    title: "Ergonomic Chair",
    category: "Furniture",
    savedAmount: 0,
    targetAmount: 1200,
    progress: 0,
    completed: false,
  },
];

//! filter — ამოცანა 1

// დატოვე მხოლოდ დაუსრულებელი goals, რომელთა progress არის მინიმუმ 70.

// მოსალოდნელი titles:

// MacBook Pro
// React Conference
// Emergency Fund

const unfinishedGoals = goals.filter((goal) => {
  return goal.completed === false && goal.progress >= 70;
});

console.log(unfinishedGoals);

//! filter — ამოცანა 2

// დატოვე მხოლოდ Technology კატეგორიის goals, რომელთა targetAmount მეტია 500-ზე.

// მოსალოდნელ შედეგში უნდა დარჩეს მხოლოდ:

// MacBook Pro

const techTargetAmount = goals.filter((goal) => {
  let item = "";
  return goal.category === "Technology" && goal.targetAmount > 500
    ? (item = goal.title)
    : item;
});

console.log(techTargetAmount);

//! filter — ამოცანა 3

// დატოვე მხოლოდ ის goals, რომელთა დანაზოგი ჯერ 0 არ არის, მაგრამ goal დასრულებულიც არ არის.

// პირობები:

// savedAmount > 0
// completed === false

const unfinishedMoreThanZero = goals.filter((goal) => {
  return goal.savedAmount > 0 && goal.completed === false;
});

console.log(unfinishedMoreThanZero);

//! reduce — ამოცანა 1

// დათვალე ყველა goal-ის targetAmount-ების ჯამი.

// მოსალოდნელი შედეგი:

// 10849

// Accumulator:

// number

// Initial value:

// 0

const getSumOfTargetAmounts = (acc, currentValue) => {
  return (acc += currentValue.targetAmount);
};

const sumOfTargetAmounts = goals.reduce(getSumOfTargetAmounts, 0);

console.log(sumOfTargetAmounts);

//! reduce — ამოცანა 2

// იპოვე ყველაზე მაღალი progress-ის მქონე დაუსრულებელი goal.

// უნდა დაბრუნდეს მთელი ობიექტი.

// მოსალოდნელი შედეგი:

// Emergency Fund

// Initial value:

// null

// Accumulator-ის ინვარიანტი:

// null
// ან
// აქამდე ნაპოვნი ყველაზე მაღალი progress-ის მქონე დაუსრულებელი goal

const getHighestProgress = (acc, currentValue) => {
  if (!currentValue.completed && acc === null) {
    return currentValue;
  }

  if (
    acc !== null &&
    !currentValue.completed &&
    acc.progress < currentValue.progress
  ) {
    return currentValue;
  }

  return acc;
};

const highestProgress = goals.reduce(getHighestProgress, null);

console.log(highestProgress);

//! reduce — ამოცანა 3

// დათვალე goals-ის რაოდენობა კატეგორიების მიხედვით.

// მოსალოდნელი შედეგი:

// {
//   Technology: 2,
//   Travel: 1,
//   Finance: 1,
//   Furniture: 1,
// }

// Initial value:

// {}

const GetCountByGoals = (acc, currentValue) => {
  const category = currentValue.category;

  if (acc[category] === undefined) {
    acc[category] = 1;
  } else {
    acc[category]++;
  }

  return acc;
};

const countByGoals = goals.reduce(GetCountByGoals, {});
console.log(countByGoals);
