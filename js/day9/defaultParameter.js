let addThreeNumbers = (a = 10, b = 20, c = 5) => {
  let calculated = a + b + c;
  return calculated;
};

// console.log(addThreeNumbers(25, null, 30));

let addThreeNumbers1 = (a = 1, b = 1, c = a + b) => {
  let calculated = a + b + c;
  return calculated;
};
// console.log(addThreeNumbers1(2, 4));

// using a function in default value expression

const sum = () => 15;
// console.log(sum());

const calculate = function (x, y = x * sum()) {
  return x + y;
};

const result = calculate(2);
console.log(result); //
