// Type conversion is the process of explicitly converting a value from one type to another.
// User input is typically accepted as a string value
// let amount = prompt('Enter a number: ');

// Taking the value placed in the amount variable and converting it to a Number
// amount = Number(amount);
// amount += 1;
// amount++;


// Cconverting a string to a number
// amount = parseInt(amount); 

// Unary operator
// amount = +amount;

// console.log(amount, typeof amount);

// Number constructor
// amount = Number(amount);


// Convert number to a string

// Using the toString() method
// amount = amount.toString();

// Using the string constructor
// amount = String(amount);

// Convert string to decimal
// amount = parseFloat(amount);

// Convert number to Boolean
// amount = Boolean(amount);

// console.log(Math.sqrt(-1));

// console.log(amount, typeof amount);

const PI = 3.141159;
let radius;
let circumference;

document.getElementById('mySubmit').onclick = function() {
    radius = document.getElementById('myText').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH3').textContent = circumference;
    console.log(circumference);
}
