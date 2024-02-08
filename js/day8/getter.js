let student = {
  name: "Ramesh",
  age: 23,

  get result() {
    return this.name;
  },

  set setName(value) {
    this.name = value;
  },
};

// console.log(student.result);
student.setName = "Bikram";

console.log(student);
