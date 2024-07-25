const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => input.length <= 3 || "1-3 to three characters only:",
  },
  {
    type: "input",
    name: "colorText",
    message:
      "What color would you like your text? (enter color name or hexidecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would like your logo to be?",
    choices: ["square", "triangle", "circle"],
  },
  {
    type: "input",
    name: "colorShape",
    message:
      "What color would you like your shape? (enter color name or hexidecimal)",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, colorText, shape, colorShape } = answers;
  let shapeDesign;

  switch (shape) {
    case "square":
      shapeDesign = new Square(colorShape);
      break;
    case "triangle":
      shapeDesign = new Triangle(colorShape);
      break;
    case "circle":
      shapeDesign = new Circle(colorShape);
      break;
  }

  const svgLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shapeDesign.render()}
<text x="150" y="125" font-size="40" text-anchor="middle" fill="${colorText}">${text}</text>
</svg>
`;

  fs.writeFile("logo.svg", svgLogo.trim(), (err) => {
    if (err) {
      console.error("Could not generate logo:", err);
    }
    console.log("Logo generated to logo.svg file!");
  });
});
