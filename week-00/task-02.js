const users = [
  { id: 1, name: "Nika", age: 23, country: "Georgia", isActive: true },
  { id: 2, name: "Ana", age: 31, country: "France", isActive: false },
  { id: 3, name: "Luka", age: 19, country: "Georgia", isActive: true },
  { id: 4, name: "John", age: 27, country: "USA", isActive: true },
  { id: 5, name: "Marie", age: 35, country: "France", isActive: true },
  { id: 6, name: "Gio", age: 17, country: "Georgia", isActive: false },
];

// ამოცანა 3

// მოცემულია იგივე users მასივი.

// იპოვე, რამდენი აქტიური მომხმარებელია თითოეულ ქვეყანაში.

// სასურველი შედეგი:

// {
//   Georgia: 2,
//   USA: 3,
//   France: 1,
// }

const countActiveUsersByCountry = (users) => {
  return users.reduce((acc, user) => {
    if (!user.isActive) {
      return acc;
    }

    if (acc[user.country] === undefined) {
      acc[user.country] = 1;
    } else {
      acc[user.country] += 1;
    }

    return acc;
  }, {});
};

const result = countActiveUsersByCountry(users);

console.log(result);
