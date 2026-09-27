import Arithmetic, { add, subtract } from './math.js';

console.log(Arithmetic);
// console.log(module);

let result = add(20, 10);
console.log(result);

result = subtract(30, 10);
console.log(result);

result = Arithmetic.multiply(5, 10);
console.log(result);