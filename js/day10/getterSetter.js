class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get getName() {
    console.log(this.name);
  }
  set setName(value) {
    this.name = value;
  }
}
let person1 = new Person("Ramesh", 23);
console.log(person1);
// console.log(person1.name);
// person1.getName;
person1.setName = "Jack";
// person1.getName;
