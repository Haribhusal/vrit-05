//constructor function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person1 = new Person("Ramesh", 23);

// console.log(person1.name);
// console.log(person1.age);

class Person {
  constructor(name) {
    this.name = name;
  }
}

let person1 = new Person("Ramesh");
console.log(person1.name);
let person2 = new Person("Jack");
console.log(person2.name);
