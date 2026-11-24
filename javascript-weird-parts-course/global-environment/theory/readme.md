# The Global Environment and the Global Object

## 1. Global Execution Context (GEC)

JavaScript-ის კოდი სრულდება Execution Context-ში.

Execution Context არის JavaScript Engine-ის შიდა მექანიზმი,
რომელიც მართავს კოდის შესრულებას და ინახავს შესრულებისთვის
საჭირო ინფორმაციას.

Global Execution Context არის გლობალური კოდის შესრულების
საბაზისო კონტექსტი.

მისი კონცეპტუალური სტრუქტურაა:

- Global Object — გლობალური ობიექტი.
- this — კონტექსტთან დაკავშირებული სპეციალური მნიშვნელობა.
- Outer Environment — გარე ლექსიკურ გარემოსთან კავშირი.
- Your Code — პროგრამისტის მიერ დაწერილი კოდი.

მაშინაც კი, როდესაც JavaScript-ის ფაილი ცარიელია,
მისი გაშვებისას იქმნება Execution Context.

## 2. Global Object

Global Object არის შესრულების გარემოს გლობალური ობიექტი,
რომელიც შეიცავს სხვადასხვა Property-სა და Method-ს.

ბრაუზერში მასზე წვდომა შეგვიძლია window-ის საშუალებით.

```js
window;
window.document;
window.console;
window.localStorage;
window.setTimeout;
```

ეს ფუნქციები და ობიექტები ხელმისაწვდომია მიუხედავად იმისა,
რომ ისინი თავად არ შეგვიქმნია.

მაგალითად:

```js
console.log("Hello");
window.console.log("Hello");
```

ორივე ერთსა და იმავე გლობალურ ობიექტს მიმართავს,
თუ console ლოკალურად არ არის გადაფარული.

## 3. The "this" Keyword

this არის JavaScript-ის სპეციალური Keyword,
რომლის მნიშვნელობაც კონტექსტზეა დამოკიდებული.

ბრაუზერის ჩვეულებრივი Script-ის გლობალურ დონეზე
this და window ერთსა და იმავე ობიექტზე მიუთითებენ.

```js
console.log(this === window); // true
```

მნიშვნელოვანია:
this ყოველთვის window-ის ტოლი არ არის.
მისი მნიშვნელობა კონტექსტის მიხედვით იცვლება.

## 4. Global Variables and Functions

ბრაუზერის ჩვეულებრივ Script-ში გლობალურად გამოცხადებული
var ცვლადები და Function Declarations, შესაბამის პირობებში,
Global Object-ის Properties ხდებიან.

```js
var a = "Hello World";

function b() {
  return "Hello";
}

console.log(window.a); // "Hello World"
console.log(window.b); // function b()
console.log(a === window.a); // true
console.log(b === window.b); // true
```

ეს უკავშირდება წინა ლექციის Name/Value Pair კონცეფციას.

window ობიექტს ემატება ახალი Properties:

- a — String
- b — Function

ფუნქციაც შეიძლება ობიექტის Property-ის მნიშვნელობა იყოს.

## 5. var vs let vs const

თანამედროვე JavaScript-ში გლობალური var, let და const
ერთნაირად არ იქცევიან.

```js
var a = 10;
let b = 20;
const c = 30;

console.log(window.a); // 10
console.log(window.b); // undefined
console.log(window.c); // undefined
```

var:

- ქმნის გლობალურ Binding-ს.
- ჩვეულებრივ Script-ში ხდება window-ის Property.

let და const:

- ქმნიან გლობალურ ლექსიკურ Binding-ებს.
- არ ხდებიან window-ის Properties.

Global Environment კონცეპტუალურად იყოფა ორ ნაწილად:

- Object Environment Record — დაკავშირებულია Global Object-თან.
- Declarative Environment Record — ინახავს let და const Binding-ებს.

## 6. Outer Environment

Outer Environment არის გარე ლექსიკურ გარემოსთან კავშირი.

Global Environment-ის Outer Environment არის null,
რადგან მასზე უფრო გარე ლექსიკური გარემო არ არსებობს.

ფუნქციის შემთხვევაში კი Outer Environment შეიძლება
არსებობდეს.

```js
var language = "JavaScript";

function greet() {
  var message = "Hello";
  console.log(language);
}

greet(); // JavaScript
```

ფუნქციას შეუძლია გარე ლექსიკურ გარემოში არსებული
ცვლადების მოძებნა.

ეს კონცეფცია საფუძვლად უდევს Scope Chain-სა და Closures-ს.

## 7. Browser vs Node.js

JavaScript-ის სხვადასხვა Runtime Environment-ს
განსხვავებული გლობალური ობიექტები აქვს.

| Environment | Global Object Access |
| ----------- | -------------------- |
| Browser     | window               |
| Node.js     | global               |
| Web Worker  | self                 |
| Universal   | globalThis           |

globalThis არის თანამედროვე JavaScript-ის სტანდარტული
მექანიზმი გლობალურ ობიექტზე წვდომისთვის.

Browser:

```js
console.log(globalThis === window); // true
```

Node.js:

```js
console.log(globalThis === global); // true
console.log(typeof window); // "undefined"
```

JavaScript ერთი და იგივე ენაა, თუმცა Runtime Environment
განსხვავებულ შესაძლებლობებს გვთავაზობს.

## 8. Classic Script vs ES Module

ლექტორის მაგალითები ეფუძნება Classic Script-ს.

```html
<script src="app.js"></script>
```

თანამედროვე პროექტებში ხშირად გამოიყენება ES Modules.

```html
<script type="module" src="app.js"></script>
```

| Behavior        | Classic Script | ES Module    |
| --------------- | -------------- | ------------ |
| Top-level this  | window         | undefined    |
| Top-level var   | Global Object  | Module Scope |
| Top-level let   | Global Binding | Module Scope |
| Top-level const | Global Binding | Module Scope |
| Strict Mode     | Optional       | Automatic    |

ამ განსხვავების გათვალისწინება მნიშვნელოვანია
React-ის, Next.js-ისა და Node.js-ის გამოყენებისას.

## 9. Summary

- JavaScript-ის კოდი სრულდება Execution Context-ში.
- Global Object ჩვენი კოდის გარეშეც ხელმისაწვდომია.
- Browser-ში Global Object-ზე წვდომა გვაქვს window-ით.
- Classic Script-ის გლობალურ დონეზე this === window.
- გლობალური var და let/const განსხვავებულად იქცევიან.
- Global Environment-ის Outer Environment არის null.
- სხვადასხვა Runtime-ს განსხვავებული Global Object აქვს.
- globalThis გლობალურ ობიექტზე წვდომის უნივერსალური საშუალებაა.

## Key Takeaway

JavaScript-ის კოდი არ სრულდება იზოლირებულად.

JavaScript Engine და მისი Runtime Environment უზრუნველყოფენ
კოდის შესრულებისთვის საჭირო გარემოს, რომელიც შეიცავს
გლობალურ ობიექტებს, Binding-ებსა და დამატებით მექანიზმებს,
მიუხედავად იმისა, რომ პროგრამისტს ისინი თავად არ შეუქმნია.
