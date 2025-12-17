const lodash = require("lodash")
const mathModule = require("./math.js")

//Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
console.log(lodash.sum([3, 6]));
console.log(mathModule.multiply(3, 2))
console.log(mathModule.suma(9, 2));
