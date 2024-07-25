const { Circle, Triangle, Square } = require("./shapes.js");

describe("shape classes", () => {
  test("render Circle", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="50" fill="green" />'
    );
  });

  test("render Square", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="100" y="50" width="100" height="100" fill="green" />'
    );
  });

  test("render Triangle", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150,50 100,150 200,150" fill="green" />'
    );
  });
});
