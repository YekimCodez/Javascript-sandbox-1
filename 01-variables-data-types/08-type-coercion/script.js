let x;

x = 5 + '5'; // Will return 55 because it is concatenated via the '+' arithmetic operator

x = 5 + Number('5'); // Will return 10 because we're using the Number() constructor which converts '5' into a number

x = 5 * '5'; // The multiplication operator is only used on numbers, javascript converts '5' into a number so the result is 25.

// x = 5 + null;

// x = 5 + Number(null);
// x = Number(true);
// x = Number(false);

x = '5' + '5';
x = Number('5') + Number('5');

// other operators like subtraction(-), multiplication(*) and division(/) force conversion to numbers

x = 10 - '3';
x = 10 / '3';
x = 10 * '3';


console.log(x, typeof x);