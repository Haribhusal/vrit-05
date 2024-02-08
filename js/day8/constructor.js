function Person(p_name, p_age, p_address) {
  this.name = p_name;
  this.age = p_age;
  this.address = p_address;
  //   this.gender = "Male";
  this.greet = function () {
    console.log("Hi" + this.name);
  };
}

console.log(Person.prototype);
Person.prototype.gender = "Male";
Person.prototype.phone = "98XXXXXXXX";
console.log(Person.prototype);

// here line no 5 and 10 are equivalent

// Here Person is a contructor function. It is used to define the properties of the the Object.

let person1 = new Person("Ramesh", 34, "ktm");
let person2 = new Person("Bikash", 23, "Pokhara");
let person3 = new Person("Bikram", 19, "Dharan");

// console.log(person1.gender);
// console.log(person2.gender);
// person2.greet();
// person3.greet();

// console.log(person1.name);
// console.log(person2.age);
