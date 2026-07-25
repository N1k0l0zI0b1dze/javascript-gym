# Chapter 7 — Cheat Sheet

## `map`

```js
const newArray = array.map((item) => {
  return changedItem;
});
```

დაიმახსოვრე:

```txt
map = თითოეული ელემენტი შეცვალე
```

აბრუნებს:

```txt
ახალ Array-ს
```

შედეგის სიგრძე:

```txt
საწყისი Array-ის სიგრძის ტოლი
```

მაგალითი:

```js
const doubled = [1, 2, 3].map((number) => number * 2);
// [2, 4, 6]
```

---

## `filter`

```js
const filteredArray = array.filter((item) => {
  return condition;
});
```

დაიმახსოვრე:

```txt
filter = რომელი ელემენტები უნდა დარჩეს?
```

აბრუნებს:

```txt
ახალ Array-ს
```

მაგალითი:

```js
const activeUsers = users.filter((user) => user.isActive);
```

---

## `reduce`

```js
const result = array.reduce((acc, item) => {
  return updatedAcc;
}, initialValue);
```

დაიმახსოვრე:

```txt
reduce = რა ერთი საბოლოო შედეგი მინდა?
```

აბრუნებს:

```txt
ნებისმიერ ტიპს
```

მაგალითი:

```js
const total = [10, 20, 30].reduce((sum, number) => {
  return sum + number;
}, 0);
```

---

## Initial Values

```js
0
```

რიცხვისთვის.

```js
""
```

ტექსტისთვის.

```js
[]
```

მასივისთვის.

```js
{}
```

ობიექტისთვის.

```js
null
```

როცა ჯერ შედეგი არ არსებობს.

---

## Dynamic Object Property

```js
const country = "Georgia";

acc[country];
```

იგივეა:

```js
acc["Georgia"];
```

მნიშვნელობის გაზრდა:

```js
acc[country] += 1;
```

პირველად შექმნა:

```js
acc[country] = 1;
```

მოკლე ფორმა:

```js
acc[country] = (acc[country] ?? 0) + 1;
```

---

## ყველაზე ხშირი შეცდომები

### `map` side effect-ისთვის

არასასურველი:

```js
const names = [];

users.map((user) => {
  names.push(user.name);
});
```

უკეთესი:

```js
const names = users.map((user) => user.name);
```

### Object-ზე Array method-ის გამოყენება

არასწორი:

```js
acc.map(...)
```

თუ `acc` არის:

```js
{
  Georgia: 2
}
```

`map` მხოლოდ Array-ს აქვს.

### `reduce`-ში `return`-ის დავიწყება

არასწორი:

```js
array.reduce((acc, item) => {
  acc.push(item);
}, []);
```

სწორი:

```js
array.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, []);
```

### ცარიელი Array initial value-ის გარეშე

არასწორი:

```js
[].reduce(callback);
```

სწორი:

```js
[].reduce(callback, initialValue);
```

---

## მეთოდის სწრაფი არჩევა

```txt
თითოეული ელემენტის შეცვლა? → map

ზოგი ელემენტის დატოვება? → filter

ერთი საბოლოო შედეგი? → reduce
```
