const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

// here total is accumulator
function myFunction(total, value) {
  return total + value;
}
