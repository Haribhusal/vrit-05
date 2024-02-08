let person1 = {
  name: "name1",
  age: 23,
};

let person2 = {
  name: "name2",
  age: 24,
};

let person3 = {
  name: "name3",
  age: 25,
};

let people = [person1, person2, person3];

// console.log(people[1].age);
// console.log(people.length);

let students = ["Bineet", "Bishal", "Nurain", "Amrit"];

let fruits = new Array();
// console.log(fruits.length);
// console.log(typeof fruits);

// let students = [];

// console.log(students.length);
// console.log(typeof students);

people[0].name = "Hari";
// console.log(people[0].name);

people[3] = "asddas";
// console.log(people.length);
// console.log(people[3]);

// document.getElementById("display").innerText = people[0].name;

people[4] = 45;
people[5] = false;

// console.log(people.length);

let result = people[people.length - 1];
// console.log(result);
people.push("Navraj");

people[people.length] = "Test";

// console.log(people);

let test = "";

// console.log(Array.isArray(test));

let stringVersion = people.toString();

// console.log(typeof stringVersion);

console.log(people.at(3));
