// get the ul element and all the li elements
const ul = document.getElementById('list');

const query = document.querySelectorAll('li');
console.log(query);

console.log(query[1]);
query[0].textContent = 'Hello World';

// access the NodeList and modify the second element in the list using a forEach loop
query.forEach((item, index) => {

    console.log(query[2]);

});

