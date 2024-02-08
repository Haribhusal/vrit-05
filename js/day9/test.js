// let person = {
//   name: "Hari",
//   address: "KTM",
// };

let personMap = new Map();

// console.log(personMap);

// console.log(typeof personMap);
personMap.set("name", "Shyam");
personMap.set("address", "Pokhara");
personMap.set("phone", "98XXXXXXX");

let personWeakMap = new WeakMap();
personWeakMap.set("details", { name: "Hari", address: "KTM" });

// for (let key of personMap.keys()) {
//   console.log(key);
// }

// for (let key of personMap.values()) {
//   console.log(key);
// }

// for (let element of personMap.entries()) {
//   console.log(`${element[0]} is ${element[1]}`);
// }

// console.log(personMap.get("name"));

// console.log(personMap);
// personMap.delete("address");
// console.log(personMap);
// personMap.clear();
