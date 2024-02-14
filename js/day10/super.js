class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  area() {
    console.log("Area calculation not implemented for generic shape.");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Usage
const myCircle = new Circle("red", 5);
console.log(
  `Area of circle with radius ${myCircle.radius} is ${myCircle.area()} units.`
);
console.log(`Color of the circle: ${myCircle.getColor()}`);

const myRectangle = new Rectangle("blue", 4, 6);
console.log(
  `Area of rectangle with width ${myRectangle.width} and height ${
    myRectangle.height
  } is ${myRectangle.area()} units.`
);
console.log(`Color of the rectangle: ${myRectangle.getColor()}`);
