# Chapter 3 — `filter`

## 1. რას აკეთებს `filter`?

`filter` მასივიდან ტოვებს მხოლოდ იმ ელემენტებს, რომლებიც პირობას აკმაყოფილებს.

ზემარტივი შედარება:

> წარმოიდგინე სკოლის კართან დგას დაცვა.

დაცვა თითოეულ მოსწავლეს ეკითხება:

> გაქვს საშვი?

თუ პასუხია `true`, მოსწავლე შედის.

თუ პასუხია `false`, მოსწავლე გარეთ რჩება.

ეს არის `filter`.

---

## 2. ძირითადი სინტაქსი

```js
const filteredArray = originalArray.filter((element) => {
  return condition;
});
```

მოკლე ფორმა:

```js
const filteredArray = originalArray.filter((element) => condition);
```

---

## 3. მარტივი მაგალითი

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
```

შედეგი:

```js
[2, 4, 6]
```

პროცესი:

```txt
1 → false → არ დარჩა
2 → true  → დარჩა
3 → false → არ დარჩა
4 → true  → დარჩა
```

---

## 4. `filter`-ის callback უნდა აბრუნებდეს boolean-like მნიშვნელობას

```js
return true;
```

ელემენტი დარჩება.

```js
return false;
```

ელემენტი არ დარჩება.

მაგალითად:

```js
const adults = users.filter((user) => user.age >= 18);
```

---

## 5. აქტიური მომხმარებლების დატოვება

```js
const activeUsers = users.filter((user) => {
  return user.isActive === true;
});
```

უფრო მოკლედ:

```js
const activeUsers = users.filter((user) => user.isActive);
```

რადგან `user.isActive` უკვე boolean მნიშვნელობაა.

---

## 6. `filter` ყოველთვის ახალ Array-ს აბრუნებს

```js
const result = users.filter((user) => user.isActive);
```

`result` ყოველთვის Array იქნება.

შესაძლო შედეგები:

```js
[
  { name: "Nika", isActive: true }
]
```

ან:

```js
[]
```

თუ არცერთი ელემენტი არ აკმაყოფილებს პირობას.

---

## 7. შედეგის სიგრძე შეიძლება შემცირდეს

`map`-ისგან განსხვავებით, `filter`-მა შეიძლება:

- ყველა ელემენტი დატოვოს;
- რამდენიმე დატოვოს;
- არცერთი არ დატოვოს.

მაგალითად:

```js
const numbers = [1, 2, 3];

numbers.filter((number) => number > 0);
// [1, 2, 3]

numbers.filter((number) => number > 2);
// [3]

numbers.filter((number) => number > 10);
// []
```

---

## 8. რამდენიმე პირობის გაერთიანება

```js
const result = users.filter((user) => {
  return user.isActive && user.age >= 18;
});
```

ეს ნიშნავს:

```txt
user უნდა იყოს აქტიური
და
user უნდა იყოს მინიმუმ 18 წლის
```

---

## 9. `filter` და `map` ერთად

ხშირად ჯერ ვფილტრავთ და შემდეგ ვგარდაქმნით.

```js
const activeUserNames = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
```

ლოგიკა:

```txt
users
→ დატოვე მხოლოდ აქტიურები
→ აიღე მათი სახელები
```

---

## 10. როდის არ უნდა გამოვიყენოთ `filter`

თუ გინდა მხოლოდ ერთი ელემენტის პოვნა, შეიძლება უკეთესი იყოს `find`.

```js
const user = users.find((user) => user.id === 3);
```

`filter` დააბრუნებს Array-ს:

```js
const result = users.filter((user) => user.id === 3);
```

შედეგი:

```js
[{ id: 3, ... }]
```

`find` კი აბრუნებს ერთ ელემენტს:

```js
{ id: 3, ... }
```

---

## 11. Mental Model

```txt
filter = რომელი ელემენტები უნდა დარჩეს?
```

საკუთარ თავს ჰკითხე:

> მინდა მასივიდან მხოლოდ პირობის შესაბამისი ელემენტები?

თუ პასუხია „კი“, გამოიყენე `filter`.

---

## 12. პატარა სავარჯიშოები

### სავარჯიშო 1

დატოვე მხოლოდ დადებითი რიცხვები:

```js
const numbers = [-3, 2, -1, 5, 0];
```

### სავარჯიშო 2

დატოვე მხოლოდ პროდუქტები, რომლებიც მარაგშია.

### სავარჯიშო 3

დატოვე მხოლოდ აქტიური users საქართველოდან.
