// Global Objects
// console.log(module)
// console.log(console)
// console.log(__dirname)
// console.log(__filename)
// console.log(process)
// console.log(global)

// Core Modules
// const http = require('node:http')
// const fs = require('node:fs')
// const path = require('node:path')
// const os = require('node:os')

// console.log('HTTP:', http)
// console.log('OS:', os.platform(), os.release(), os.type())

const msg = require('./message.js')
const arithmetic = require('./Arithmetic.js')
const College = require('./College.js')

// Destructuring the imported arithmetic module
// const { add, subtract, multiply, divide } = require('./Arithmetic.js')
console.log(msg.name)
// console.log(arithmetic)
console.log(arithmetic.sum(5, 3))
console.log(arithmetic.sub(5, 3))
console.log(arithmetic.multiply(5, 3))
console.log(arithmetic.divide(5, 3))

// console.log(add(10, 5))

console.log(College.college)
console.log(College.program)
console.log(College.year)

console.log(College.students)
// console.log(module)