// let myset = new Set([1, 2, 3]);
// let str = "";
// for (let entry of myset.entries()) {
//   str += entry + " ";
// }

// console.log(str);

let myWeakSet = new WeakSet();

// console.log(typeof myWeakSet);

let person = {
  name: "Hari",
  address: "Kathmandu",
};

myWeakSet.add(person);

// console.log(myWeakSet.has(person));
myWeakSet.delete(person);
console.log(myWeakSet);
