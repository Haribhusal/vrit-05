let person = {
  name: "Shyam",
  address: "Ktm",
};

Object.defineProperty(person, "getName", {
  get: function () {
    return this.name;
  },
});

Object.defineProperty(person, "setTheName", {
  set: function (value) {
    this.name = value;
  },
});

person.setTheName = "Bineet";
console.log(person.getName);
