Copy
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
forEach Method:

Copy
let myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
  console.log(element);
});
for...of Loop:

Copy
let myArray = [1, 2, 3, 4, 5];
for (let element of myArray) {
  console.log(element);
}
map Method:

Copy
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.map(function(element) {
  return element * 2;
});
console.log(newArray);
filter Method:

Copy
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.filter(function(element) {
  return element > 2;
});
console.log(newArray);
reduce Method:

Copy
let myArray = [1, 2, 3, 4, 5];
let sum = myArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);