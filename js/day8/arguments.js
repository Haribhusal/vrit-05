// function addNumbers(a, b, c, d, e, f) {
//   console.log(arguments);
// }

// addNumbers(1, 2, 3, 4, 5, 6);

let addNumbersall = (...args) => console.log(args);

addNumbersall(2, 3, 4);
