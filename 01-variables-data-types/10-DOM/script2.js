const ulElement = document.querySelector('#myList');
ulElement.classList.add('list-home');

const liElements = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

liElements.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.classList.add('card');
    li.textContent = element;
    ulElement.appendChild(li);
}); 

const listItems = document.querySelectorAll('.list-item');
console.log(typeof listItems);

console.log(listItems);
listItems[0].style.backgroundColor = 'lightblue';
listItems[1].style.backgroundColor = 'lightgreen';
listItems[2].style.backgroundColor = 'lightyellow';
listItems[3].style.backgroundColor = 'lightpink';
listItems[4].style.backgroundColor = 'lightgray';

