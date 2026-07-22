const users = [
  { id: 1, name: "Nika", age: 23, country: "Georgia", isActive: true },
  { id: 2, name: "Ana", age: 31, country: "France", isActive: false },
  { id: 3, name: "Luka", age: 19, country: "Georgia", isActive: true },
  { id: 4, name: "John", age: 27, country: "USA", isActive: true },
  { id: 5, name: "Marie", age: 35, country: "France", isActive: true },
  { id: 6, name: "Gio", age: 17, country: "Georgia", isActive: false },
];

// ```
// ამოცანა 1

// დააბრუნე მხოლოდ აქტიური მომხმარებლების სახელები.

// სასურველი შედეგი:

// ["Nika", "Luka", "John", "Marie"]
// ```;

const getActiveUsers = (users) => {
  const activeUsers = [];
  users.map((user) => {
    user.isActive && activeUsers.push(user.name);
  });

  return activeUsers;
};

console.log(getActiveUsers(users));

// ამოცანა 2

// იპოვე ყველაზე ასაკოვანი აქტიური მომხმარებელი.

// უნდა დაბრუნდეს მთელი ობიექტი.

// const getEldestActiveUser = (users) => {
//   const age = 0;
//   users.reduce(age, users.age);
// };
