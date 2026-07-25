# Chapter 1 — მასივები და Callback ფუნქციები

## 1. რა არის Array?

Array არის სია.

მაგალითად, მაღაზიაში გვაქვს პროდუქტების სია:

```js
const products = ["Bread", "Milk", "Cheese"];
```

აქ:

```txt
"Bread"  → პირველი ელემენტი
"Milk"   → მეორე ელემენტი
"Cheese" → მესამე ელემენტი
```

მასივის ინდექსები იწყება `0`-დან:

```js
products[0]; // "Bread"
products[1]; // "Milk"
products[2]; // "Cheese"
```

ზომის გასაგებად ვიყენებთ:

```js
products.length; // 3
```

JavaScript-ში Array-ის ზომა არის `.length`.

```js
arr.length
```

არა:

```js
arr.size()
```

ეს უკანასკნელი უფრო C++-ის სტილია.

---

## 2. Array შეიძლება შეიცავდეს ობიექტებს

რეალურ პროექტში მასივი ხშირად შეიცავს ობიექტებს:

```js
const users = [
  {
    id: 1,
    name: "Nika",
    age: 23,
    isActive: true,
  },
  {
    id: 2,
    name: "Luka",
    age: 19,
    isActive: false,
  },
];
```

აქ თითოეული ელემენტი არის მთელი `user` ობიექტი.

```js
users[0];
```

დააბრუნებს:

```js
{
  id: 1,
  name: "Nika",
  age: 23,
  isActive: true
}
```

---

## 3. რა არის Callback ფუნქცია?

Callback არის ფუნქცია, რომელსაც სხვა ფუნქციას არგუმენტად გადავცემთ.

ზემარტივი შედარება:

> წარმოიდგინე მასწავლებელი, რომელიც კლასში თითოეულ მოსწავლეს ამოწმებს.

მასწავლებელი არის Array method.

მის მიერ დასმული კითხვა არის callback.

მაგალითად:

```js
const numbers = [1, 2, 3];

numbers.map((number) => {
  return number * 2;
});
```

აქ:

```js
(number) => {
  return number * 2;
}
```

არის callback ფუნქცია.

`map` მას თითოეული ელემენტისთვის გამოიძახებს.

---

## 4. Callback-ის პარამეტრები

Array-ის მეთოდების callback ჩვეულებრივ იღებს:

```js
arrayMethod((element, index, array) => {
  // ...
});
```

მაგალითი:

```js
const colors = ["red", "green", "blue"];

colors.map((color, index, originalArray) => {
  console.log(color);
  console.log(index);
  console.log(originalArray);
});
```

ყველაზე ხშირად მხოლოდ პირველ პარამეტრს ვიყენებთ:

```js
colors.map((color) => {
  return color.toUpperCase();
});
```

---

## 5. მთავარი კითხვა თითოეული მეთოდის არჩევის წინ

### `map`

> თითოეული ელემენტი როგორ შევცვალო?

### `filter`

> რომელი ელემენტები უნდა დარჩეს?

### `reduce`

> ყველა ელემენტის დამუშავების შემდეგ რა ერთი საბოლოო შედეგი მინდა?

ეს სამი კითხვა თითქმის ყოველთვის დაგეხმარება სწორი მეთოდის არჩევაში.
