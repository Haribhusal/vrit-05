// // traditional function statement
// // Function declaration with function keyword
// // Write a function name followed by function keyword
// // Here a,b are parameters
// // {} is use to enclose the operations/statements/
// // return keyword returs the calculated value

// function addTwoValues(a, b) {
//   let c = a + b;
//   return c;
// }

// let calculatedValue = addTwoValues(2, 3);
// // Here 2 and 3 are arguements
// console.log(calculatedValue);

// //modern arrow function statement => ES6

// const addValues = (a, b) => a + b;
// console.log(addValues(3, 4));

function convertToNepali(dollarAmount) {
  return dollarAmount * 133.59;
}
console.log(convertToNepali(5));
