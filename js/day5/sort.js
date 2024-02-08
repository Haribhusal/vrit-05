let fruits = ["Banana", "Apple", "Mango", "Orange"];

let newArray = fruits.sort();

console.log(newArray);

let numbers = [54, 41, 221, 14334];
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);
