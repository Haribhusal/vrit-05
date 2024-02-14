let person = {
  name: "Ramesh",
  age: 23,
  address: {
    city: "KTM",
    country: "Nepal",
  },
};

let {
  name,
  age,
  address: { city, country },
} = person;

// console.log(country);

let numbers = [2, 3, 4, [5, 6, 7, 8, 9], 10];

let [x, y, z, [a, b, c, d, e], m] = numbers;

console.log(e);
