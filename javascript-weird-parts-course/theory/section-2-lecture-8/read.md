Name/Value Pairs and Objects
ამ ლექციაში Anthony Alicea ორ ერთმანეთთან დაკავშირებულ კონცეფციას გვაცნობს:

- Name/Value Pair — სახელისა და მნიშვნელობის წყვილი.
- Object — ასეთი წყვილების ერთობლიობა.
  ლექცია საკმაოდ მარტივია, მაგრამ მნიშვნელოვანი საფუძველია იმის გასაგებად, თუ როგორ არის JavaScript-ში მონაცემები ორგანიზებული.

1. Name/Value Pair
   ლექტორის განმარტება:
   A Name/Value pair is a name which maps to a unique value.

ანუ გვაქვს სახელი (Name), რომელსაც კონკრეტული მნიშვნელობა (Value) შეესაბამება.
let address = "100 Main Street";

Nameaddress

Value"100 Main Street"

სხვა მაგალითები:
let age = 22;
let isStudent = true;
let language = "JavaScript";

Name Value Type
age 22 Number
isStudent true Boolean
language "JavaScript" String

ჯერჯერობით არაფერი ახალი, მაგრამ ლექტორი ამ მარტივი კონცეფციიდან იწყებს უფრო რთული სტრუქტურების ახსნას.
რას გულისხმობს Unique Value-ში?
ეს არ ნიშნავს, რომ ორ განსხვავებულ ცვლადს ერთნაირი მნიშვნელობა არ შეიძლება ჰქონდეს.
let a = 10;
let b = 10;

ეს სრულიად სწორია.

იგულისხმება, რომ კონკრეტულ გარემოში ერთი Binding მოცემულ მომენტში ერთ მნიშვნელობას უკავშირდება. მნიშვნელობა დროთა განმავლობაში შეიძლება შეიცვალოს.
let age = 20;

age = 21;
age = 22;

2. Object — ობიექტი
   ლექტორის განმარტება:
   An object is a collection of Name/Value pairs.

ეს არის ამ ლექციის ყველაზე მნიშვნელოვანი წინადადება.

Object = Collection of Name/Value Pairs.

მაგალითად:
const address = {
street: "Main",
number: 100
};

აქ უკვე address ცვლადის მნიშვნელობა String ან Number აღარ არის. მისი მნიშვნელობა არის Object.
Nameaddress

Object — Value

street

"Main"

number

100

ობიექტის შიგნით არსებულ Name/Value წყვილებს Properties-ს ვუწოდებთ.
street: "Main"

- street — Property Name (Key)
- "Main" — Property Value
  ანუ ობიექტი საშუალებას გვაძლევს ერთმანეთთან დაკავშირებული მონაცემები ერთ სტრუქტურაში გავაერთიანოთ.

3. Nested Objects — ჩადგმული ობიექტები
   ლექტორი შემდეგ უფრო საინტერესო მაგალითს განიხილავს.

რა მოხდება, თუ ობიექტის შიგნით არსებული ერთ-ერთი Property-ის მნიშვნელობაც ობიექტია?
const address = {
street: "Main",
number: 100,
apartment: {
floor: 3,
number: 301
}
};

Object-ის მნიშვნელობა შეიძლება სხვა Object-იც იყოს.
დააკვირდი, რომ number ორჯერ გვხვდება:
number: 100

და
number: 301

მაგრამ ისინი ერთმანეთისგან დამოუკიდებელი Properties არიან, რადგან სხვადასხვა ობიექტს ეკუთვნიან.
