// // creating symbol
// const x = Symbol("hari");
// console.log(typeof x);

// console.log(x.description);

// let id = Symbol("id");

// let person = {
//   name: "Jack",

//   // adding symbol as a key
//   [id]: 123, // not "id": 123
//   //   id: 123, Completely different
// };

// console.log(person); // {name: "Jack", Symbol(id): 123}

let id = Symbol("id");

let person = {
  name: "Jack",
  age: 25,
  [id]: 12,
};

// using for...in
for (let key in person) {
  console.log(key);
}
