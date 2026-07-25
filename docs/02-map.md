# Chapter 2 — `map`

## 1. რას აკეთებს `map`?

`map` იღებს მასივის თითოეულ ელემენტს, გარდაქმნის და ქმნის ახალ მასივს.

ზემარტივი შედარება:

> წარმოიდგინე ქარხნის კონვეიერი.

კონვეიერზე შედის პატარა ყუთები.

მანქანა თითოეულ ყუთს აწებებს ეტიკეტს.

ბოლოს გამოდის ისევ იმდენივე ყუთი, მაგრამ შეცვლილი სახით.

ეს არის `map`.

---

## 2. ძირითადი სინტაქსი

```js
const newArray = oldArray.map((element) => {
  return changedElement;
});
```

მოკლე ფორმა:

```js
const newArray = oldArray.map((element) => changedElement);
```

---

## 3. მარტივი მაგალითი

```js
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
```

შედეგი:

```js
[2, 4, 6]
```

პროცესი:

```txt
1 → 2
2 → 4
3 → 6
```

---

## 4. `map` ყოველთვის ახალ მასივს აბრუნებს

```js
const numbers = [1, 2, 3];

const result = numbers.map((number) => number * 10);

console.log(numbers); // [1, 2, 3]
console.log(result);  // [10, 20, 30]
```

ძველი მასივი ჩვეულებრივ უცვლელი რჩება.

---

## 5. შედეგის სიგრძე იგივეა

თუ საწყის მასივში არის 4 ელემენტი:

```js
const names = ["Nika", "Luka", "Ana", "Mariam"];
```

`map`-ის შედეგშიც იქნება 4 ელემენტი:

```js
const upperNames = names.map((name) => name.toUpperCase());
```

შედეგი:

```js
["NIKA", "LUKA", "ANA", "MARIAM"]
```

`map` ელემენტებს არ შლის.

---

## 6. ობიექტებიდან ერთი property-ის ამოღება

```js
const users = [
  { id: 1, name: "Nika", age: 23 },
  { id: 2, name: "Luka", age: 19 },
  { id: 3, name: "Ana", age: 27 },
];

const names = users.map((user) => {
  return user.name;
});

console.log(names);
```

შედეგი:

```js
["Nika", "Luka", "Ana"]
```

აქ მთელი `user` ობიექტი გარდაიქმნა მხოლოდ სახელად.

---

## 7. ობიექტების გარდაქმნა

```js
const users = [
  { id: 1, name: "Nika" },
  { id: 2, name: "Luka" },
];

const updatedUsers = users.map((user) => {
  return {
    ...user,
    name: user.name.toUpperCase(),
  };
});
```

შედეგი:

```js
[
  { id: 1, name: "NIKA" },
  { id: 2, name: "LUKA" }
]
```

---

## 8. `map` და `return`

`map`-ის callback-მა უნდა დააბრუნოს ახალი მნიშვნელობა.

სწორი:

```js
const result = numbers.map((number) => {
  return number * 2;
});
```

არასწორი:

```js
const result = numbers.map((number) => {
  number * 2;
});
```

მეორე შემთხვევაში `return` არ გვაქვს.

შედეგი იქნება:

```js
[undefined, undefined, undefined]
```

---

## 9. როდის არ უნდა გამოვიყენოთ `map`

თუ ახალ მასივს არ ვიყენებთ, `map` არ არის საუკეთესო არჩევანი.

მაგალითად:

```js
const names = [];

users.map((user) => {
  names.push(user.name);
});
```

ეს იმუშავებს, მაგრამ `map` აქ არასწორი განზრახვით გამოიყენება.

უკეთესია:

```js
const names = users.map((user) => user.name);
```

ან side effect-ისთვის:

```js
users.forEach((user) => {
  console.log(user.name);
});
```

---

## 10. Mental Model

```txt
map = თითოეული ელემენტი გადააკეთე
```

საკუთარ თავს ჰკითხე:

> მინდა იგივე რაოდენობის ელემენტი, მაგრამ შეცვლილი ფორმით?

თუ პასუხია „კი“, დიდი შანსია `map` გჭირდება.

---

## 11. პატარა სავარჯიშოები

### სავარჯიშო 1

```js
const numbers = [2, 4, 6];
```

მიიღე:

```js
[4, 8, 12]
```

### სავარჯიშო 2

```js
const users = [
  { name: "Nika", age: 23 },
  { name: "Ana", age: 27 },
];
```

მიიღე:

```js
["Nika is 23", "Ana is 27"]
```

### სავარჯიშო 3

ყველა პროდუქტს დაუმატე `inStock: true`.
