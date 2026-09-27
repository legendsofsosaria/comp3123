const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

const square = (a) => {
    return a * a;
}

module.exports = {
    sum:add,
    sub:subtract,
    multiply,
    divide,
    square
};