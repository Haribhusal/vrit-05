let numbers = [
  23,
  45,
  62,
  23,
  "42",
  62,
  712,
  52,
  566,
  637,
  2,
  5,
  566,
  254,
  455,
  736,
  566,
  72,
];

let result = numbers.findIndex(checker);

function checker(value) {
  return value > 500;
}

console.log(result);

// let number1 = 23;
// let number2 = 23456;

// console.log(checker(number1));
// console.log(checker(number2));

// console.log(result);
// let find = [];

// numbers.forEach(function (item, index) {
//   if (item == 566) {
//     find.push(index);
//   }
// });

// console.log(find.length);

// console.log(numbers.includes(3465456));

// console.log(numbers.indexOf(566));
// numbers[5] = "2342";

// // numbers[numbers.indexOf(566)] = 655;
// console.log(numbers.lastIndexOf(566));
