//Object Literal
let person = {
    name: "John",
    age: 30,
    city: "New York",
    null: null,
    undefined: undefined,
    "full name": "John Doe",

    displayInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    },

    // Arrow function does not have its own 'this' context,
    // it uses the 'this' value from the enclosing lexical context
    displayArrow: () => {
        console.log(this)
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
};
console.log(typeof person);
console.log(person);
person.displayInfo();
person.displayArrow();

console.log(person.name);
console.log(person["name"]);
console.log(person.null)
console.log(person["full name"])
const fnm = "full name"
console.log(person[fnm])

//Destructuring Assignment
const {
    name,
    age,
    city: myCityName,
    null:n
} = person

console.log(name, age, myCityName, n)