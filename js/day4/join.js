let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [2, 4, 6, 8];

let allNumbers = oddNumbers.concat(evenNumbers);
// console.log(allNumbers);

// console.log(oddNumbers.join(","));

let toCheckType = oddNumbers.join(".....");
// console.log(toCheckType);
// console.log(typeof toCheckType);

allNumbers.push(11);
console.log(allNumbers);
console.log(allNumbers.length);
allNumbers.pop();
console.log(allNumbers);
console.log(allNumbers.length);
