let personName = "Bineet";
let personAddress = "Baneshwor";
let personAge = 23;
let isMarried = false;

let person = {
  fname: "Bineet",
  lname: "Joshi",
  address: "Baneshwor",
  age: 23,
  isMarried: false,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};

// Object propertie's value can be extracted by 2 methods
// Using Dot Notation
// Bracket Notation

// console.log(person["age"]); //Bracket Notation
// console.log(person.name); //Dot Notation

person.age = 24;

console.log(person.fullName());
