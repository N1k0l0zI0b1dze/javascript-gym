# Chapter 4 — `reduce`

## 1. რას აკეთებს `reduce`?

`reduce` მასივის ყველა ელემენტს ამუშავებს და საბოლოოდ ერთ შედეგს აბრუნებს.

ეს ერთი შედეგი შეიძლება იყოს:

- რიცხვი;
- ტექსტი;
- ობიექტი;
- მასივი;
- ერთი კონკრეტული ელემენტი;
- `null`.

ზემარტივი შედარება:

> წარმოიდგინე თოვლის გუნდა.

თავიდან პატარაა.

გორაობისას თოვლს აგროვებს.

ყოველი ახალი მონაკვეთის შემდეგ გუნდა უფრო დიდი ხდება.

`reduce`-ის accumulator სწორედ ასეთი „გუნდასავით“ აგროვებს შედეგს.

---

## 2. ძირითადი სინტაქსი

```js
const result = array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

მოკლე სახელებით:

```js
const result = array.reduce((acc, item) => {
  return updatedAcc;
}, initialValue);
```

---

## 3. მთავარი ნაწილები

### `accumulator`

აქამდე დაგროვებული შედეგი.

### `currentValue`

მიმდინარე ელემენტი.

### `initialValue`

accumulator-ის საწყისი მნიშვნელობა.

---

## 4. რიცხვების ჯამი

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total); // 60
```

პროცესი:

```txt
საწყისი sum = 0

Iteration 1:
sum = 0
number = 10
return 10

Iteration 2:
sum = 10
number = 20
return 30

Iteration 3:
sum = 30
number = 30
return 60
```

---

## 5. რატომ გადავცემთ `0`-ს?

```js
numbers.reduce(callback, 0);
```

`0` არის accumulator-ის საწყისი მნიშვნელობა.

პირველ iteration-ზე:

```txt
acc = 0
current = numbers[0]
```

თუ initial value არ გვაქვს:

```js
numbers.reduce(callback);
```

მაშინ:

```txt
acc = numbers[0]
current = numbers[1]
```

---

## 6. ცარიელი Array-ის პრობლემა

ეს გამოიწვევს შეცდომას:

```js
[].reduce((acc, number) => acc + number);
```

შეცდომა:

```txt
TypeError: Reduce of empty array with no initial value
```

ეს უსაფრთხოდ მუშაობს:

```js
[].reduce((acc, number) => acc + number, 0);
```

შედეგი:

```js
0
```

---

## 7. ყველაზე დიდი რიცხვის პოვნა

```js
const numbers = [4, 10, 3, 25, 8];

const largest = numbers.reduce((largestSoFar, currentNumber) => {
  return largestSoFar > currentNumber
    ? largestSoFar
    : currentNumber;
});

console.log(largest); // 25
```

აქ accumulator ნიშნავს:

```txt
აქამდე ნაპოვნ ყველაზე დიდ რიცხვს
```

---

## 8. ყველაზე ასაკოვანი user-ის პოვნა

```js
const users = [
  { name: "Nika", age: 23 },
  { name: "Ana", age: 31 },
  { name: "Luka", age: 19 },
];

const eldestUser = users.reduce((prev, next) => {
  return prev.age > next.age ? prev : next;
});

console.log(eldestUser);
```

შედეგი არის მთელი ობიექტი:

```js
{
  name: "Ana",
  age: 31
}
```

ძალიან მნიშვნელოვანი:

```js
prev.age > next.age
```

გამოიყენება შედარებისთვის.

მაგრამ ვაბრუნებთ:

```js
prev
```

ან:

```js
next
```

რადგან ამოცანა მთელ ობიექტს ითხოვს.

---

## 9. აქტიური users-დან ყველაზე ასაკოვანის პოვნა ერთი `reduce`-ით

```js
const eldestActiveUser = users.reduce((prev, next) => {
  if (!next.isActive) {
    return prev;
  }

  if (prev === null) {
    return next;
  }

  return prev.age > next.age ? prev : next;
}, null);
```

Accumulator-ის ინვარიანტი:

```txt
prev ყოველთვის არის:
- null
ან
- აქამდე ნაპოვნი ყველაზე ასაკოვანი აქტიური user
```

თუ აქტიური user საერთოდ არ არსებობს, შედეგი იქნება:

```js
null
```

---

## 10. ობიექტის აგება `reduce`-ით

დავთვალოთ აქტიური users თითოეული ქვეყნის მიხედვით:

```js
const result = users.reduce((acc, user) => {
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
```

შედეგი:

```js
{
  Georgia: 2,
  USA: 3,
  France: 1
}
```

---

## 11. რატომ არის initial value `{}`?

საბოლოო შედეგი გვინდა ობიექტი:

```js
{
  Georgia: 2,
  USA: 1
}
```

ამიტომ accumulator თავიდან არის:

```js
{}
```

ზოგადი წესი:

```txt
initial value ხშირად უნდა შეესაბამებოდეს
საბოლოო შედეგის ტიპს
```

მაგალითები:

```js
0     // რიცხვითი ჯამი
""    // ტექსტი
[]    // მასივი
{}    // ობიექტი
null  // ჯერ შედეგი არ არსებობს
```

---

## 12. Dynamic Property და Bracket Notation

```js
acc[user.country]
```

თუ:

```js
user.country === "Georgia"
```

მაშინ ეს იგივეა:

```js
acc["Georgia"]
```

თუ key არსებობს:

```js
const acc = {
  Georgia: 2,
};

acc["Georgia"]; // 2
```

თუ key არ არსებობს:

```js
acc["France"]; // undefined
```

---

## 13. მოკლე დათვლის ფორმა

```js
acc[user.country] = (acc[user.country] ?? 0) + 1;
```

ლოგიკა:

```txt
თუ მნიშვნელობა არსებობს → გამოიყენე
თუ null ან undefined არის → გამოიყენე 0
შემდეგ დაამატე 1
```

პირველად:

```js
(undefined ?? 0) + 1; // 1
```

მეორედ:

```js
(1 ?? 0) + 1; // 2
```

სწავლის დასაწყისში გრძელი `if/else` ვერსია უფრო გასაგებია.

---

## 14. `return acc` აუცილებელია

```js
const result = users.reduce((acc, user) => {
  acc.push(user.name);

  return acc;
}, []);
```

თუ `return acc` დაგავიწყდა, შემდეგ iteration-ზე accumulator გახდება `undefined`.

---

## 15. Mental Model

```txt
reduce = რა ერთი საბოლოო შედეგი მინდა?
```

მაგალითები:

```txt
ჯამი → number
ყველაზე ასაკოვანი user → object
ქვეყნების სტატისტიკა → object
სახელების სია → array
ერთი ტექსტი → string
```

---

## 16. პატარა სავარჯიშოები

### სავარჯიშო 1

დათვალე პროდუქტების საერთო ფასი.

### სავარჯიშო 2

იპოვე ყველაზე ძვირი პროდუქტი.

### სავარჯიშო 3

შექმენი ობიექტი, სადაც თითოეული ასაკის რაოდენობა იქნება დათვლილი.

### სავარჯიშო 4

შექმენი ყველა user-ის სახელების ერთი ტექსტი.
