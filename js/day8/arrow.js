// function addNumbers(a, b, c) {
//   let result = a + b + c;
//   return result;
// }

// let answer = addNumbers(34, 65, 2);
// // console.log(answer);

// // Here we wrote traditional function expression

// // Write an arrow function statement to calculate the square value.

// const squareNum = (num) => num * num;

// const addTwoNumbers = (a, b) => {
//   let c = a + b;
//   return c;
// };

// console.log(squareNum(4));
// console.log(addTwoNumbers(4, 5));

// let greet = () => console.log("Hey");
// greet();

let age = 10;

let welcome = age < 18 ? () => console.log("Young") : () => console.log("Old");
welcome();

// Ternery Operator

let a = 5;
a > 3 ? console.log("Yes") : console.log("no");
