function Student(s_name) {
  this.name = s_name;
}

Student.prototype.age = 20;

Student.prototype.greet = function () {
  console.log(`Hi! ${this.name}`);
};
let student00 = new Student("Aakash");
console.log(student00.age);
let student1 = new Student("Shyam");
console.log(student1.age);

Student.prototype.age = 50;
let student2 = new Student("Bikram");
console.log(student2.age);
// student1.greet();
// student2.greet();
