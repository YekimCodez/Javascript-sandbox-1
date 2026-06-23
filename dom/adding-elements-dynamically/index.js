// Create a div element
const divElement = document.createElement('div');
divElement.classList.add('container');

document.body.appendChild(divElement);

const heading = document.querySelector('.main-heading');
heading.textContent = 'User Form';
console.log(heading);

const head = document.querySelector('head')
console.log(head);

const formElement = document.createElement('form');
formElement.classList.add('user-form');
formElement.id = 'user-form';

formElement.innerHTML = `    
    <label for="user">Name:</label>
    <input type="text" id="user" name="user">
    <button type="submit">Send</button>    
`;

const inputElement = formElement.querySelector('input');
inputElement.classList.add('name-input');
console.log(inputElement);

const button = formElement.querySelector('button');
button.classList.add('btn');
console.log(button);

const label = formElement.querySelector('label');
label.classList.add('name-label');

divElement.appendChild(formElement);

for (let i = 0; i < 4; i++) {
    const divElements = document.createElement('div');
    divElements.classList.add('card');
    divElements.textContent = `Card ${i + 1}`;
    divElement.appendChild(divElements);
}

const divElements = document.querySelectorAll('.card');

const innerDiv = document.createElement('div');
innerDiv.classList.add('inner-div');
innerDiv.append(divElements);
divElement.appendChild(innerDiv);

console.log(divElement);
console.log(divElement.children);