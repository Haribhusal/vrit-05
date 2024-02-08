// let numbers = [2, 4, 6, 9];
// console.log(numbers);
// console.log(...numbers);

// console.log("My", "name", "is", "Jack");

// let eNumbers = [2, 4, 6, 8];
// let oNumbers = [1, 3, 5, 7, 9];
// let newNumbers = [...eNumbers, ...oNumbers];
// console.log(newNumbers);

// let arr1 = [1, 2, 3];

// // copy using spread syntax
// let arr2 = [...arr1];

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// // append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]

let personAddress = {
  city: "KTM",
  country: "Nepal",
};

let personSocialLinks = {
  facebook: "https://facebook.com/userame",
  linkedin: "https://linkedin.com/in/userame",
};

let personDetails = { ...personAddress, ...personSocialLinks };

console.log(personDetails);
