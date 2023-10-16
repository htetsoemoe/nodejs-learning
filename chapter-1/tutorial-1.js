console.log('Hello World');

// global object instead of window object
// console.log(global);

// Node.js has Common Core Modules that we will explore
// CommonJS modules instead of ES6 modules

const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());


console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

// import math module and using destructuring
const {add, subtract, multiply, divide} = require('./math')

console.log(add(10, 2));
console.log(subtract(10, 2));
console.log(multiply(10, 2));
console.log(divide(10, 2));