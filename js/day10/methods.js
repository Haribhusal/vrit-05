// function Person(name) {
//   this.name = name;
//   this.greet = function () {
//     console.log("Hi!" + this.name);
//   };
// }

// let person1 = new Person("Jack");
// person1.greet();

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hi!" + this.name);
  }
}
let person1 = new Person("Ramesh");
person1.greet();
