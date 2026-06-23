//Primitive Data Types

// String
const firstName = 'Sara';

// Number
const age = 43;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
let score;

// Symbol
const id = Symbol('id');

// bigint
const n = 9007199254740991n;

// Reference Types
// Any reference type is an object

// Arrays
const numbers = [1,2,3,4];

// Object Literal
const person = {
    name: 'Mike',
    age: 43,
    address: 'St. Philip',
};

// Function
function sayHello() {
    console.log('Hello');
}


const outPut = sayHello;


console.log(outPut, typeof outPut);