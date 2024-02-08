function Person() {
  (this.name = "Jack"),
    (this.age = 25),
    (this.sayName = function () {
      // this is accessible
      console.log("age print", this.age);

      function innerFunc() {
        // this refers to the global object
        console.log("this inside regular function", this.age);
        console.log("what this is?", this);
      }

      innerFunc();
    });
}

let x = new Person();
x.sayName();
