# Chapter 5 — `map`, `filter`, `reduce` შედარება

## ერთი მასივი, სამი განსხვავებული კითხვა

გვაქვს:

```js
const users = [
  { name: "Nika", age: 23, isActive: true },
  { name: "Luka", age: 19, isActive: false },
  { name: "Ana", age: 31, isActive: true },
];
```

---

## `map`

კითხვა:

> თითოეული user-იდან რა ახალი მნიშვნელობა მინდა?

```js
const names = users.map((user) => user.name);
```

შედეგი:

```js
["Nika", "Luka", "Ana"]
```

საწყისი სიგრძე:

```txt
3
```

შედეგის სიგრძე:

```txt
3
```

---

## `filter`

კითხვა:

> რომელი users უნდა დარჩეს?

```js
const activeUsers = users.filter((user) => user.isActive);
```

შედეგი:

```js
[
  { name: "Nika", age: 23, isActive: true },
  { name: "Ana", age: 31, isActive: true }
]
```

შედეგი ისევ Array-ია, მაგრამ შეიძლება ნაკლები ელემენტით.

---

## `reduce`

კითხვა:

> ყველა user-ის დამუშავების შემდეგ რა ერთი შედეგი მინდა?

```js
const totalAge = users.reduce((sum, user) => {
  return sum + user.age;
}, 0);
```

შედეგი:

```js
73
```

---

## მარტივი ცხრილი

| მეთოდი | მთავარი კითხვა | აბრუნებს |
|---|---|---|
| `map` | როგორ შევცვალო თითოეული ელემენტი? | ახალ Array-ს |
| `filter` | რომელი ელემენტები უნდა დარჩეს? | ახალ Array-ს |
| `reduce` | რა ერთი საბოლოო შედეგი მინდა? | ნებისმიერ ტიპს |

---

## სკოლის მაგალითი

გვაქვს მოსწავლეები:

```js
const students = [
  { name: "Nika", grade: 8, passed: true },
  { name: "Ana", grade: 10, passed: true },
  { name: "Luka", grade: 4, passed: false },
];
```

### `map`

ყველა მოსწავლის სახელი:

```js
students.map((student) => student.name);
```

### `filter`

მხოლოდ ჩაბარებული მოსწავლეები:

```js
students.filter((student) => student.passed);
```

### `reduce`

ქულების ჯამი:

```js
students.reduce((sum, student) => {
  return sum + student.grade;
}, 0);
```

---

## შეიძლება ყველაფრის გაკეთება `reduce`-ით?

ტექნიკურად ხშირად შეიძლება.

მაგრამ ყოველთვის არ ღირს.

მაგალითად, სახელების მიღება:

```js
const names = users.reduce((acc, user) => {
  acc.push(user.name);
  return acc;
}, []);
```

მუშაობს, მაგრამ ეს უფრო მარტივად იწერება:

```js
const names = users.map((user) => user.name);
```

მთავარი წესი:

> გამოიყენე ყველაზე ნათელი და მიზნობრივი მეთოდი.

---

## მეთოდის არჩევის სწრაფი ალგორითმი

### კითხვა 1

გინდა თითოეული ელემენტის გარდაქმნა?

```txt
კი → map
```

### კითხვა 2

გინდა ელემენტების ნაწილის დატოვება?

```txt
კი → filter
```

### კითხვა 3

გინდა ერთი საბოლოო შედეგი?

```txt
კი → reduce
```

---

## ხშირი კომბინაცია

```js
const activeUserNames = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
```

წაკითხვა მარცხნიდან მარჯვნივ:

```txt
აიღე users
→ დატოვე აქტიურები
→ აიღე მათი სახელები
```

ეს ხშირად უფრო წაკითხვადია, ვიდრე ყველაფრის ერთ `reduce`-ში მოთავსება.
