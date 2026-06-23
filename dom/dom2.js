const heading = document.querySelector('#myHeading');
heading.classList.add('highlighted');
console.log(heading);
console.log(heading.textContent); // Output: My Heading

let olElement = document.createElement('ol');
olElement.classList.add('topics-list');
olElement.id = 'orderedTopics';
document.body.appendChild(olElement);

let ulElement = document.createElement('ul');
ulElement.classList.add('topics-list');
ulElement.id = 'unorderedTopics';
document.body.appendChild(ulElement);

let basics = [
    'HTML', 
    'CSS', 
    'JavaScript'
];

basics.forEach(topic => {
    let liElement = document.createElement('li');
    liElement.textContent = topic;
    liElement.classList.add('list-item');
    ulElement.appendChild(liElement);
});

document.body.insertBefore(ulElement, olElement);

// olElement.insertAdjacentElement('afterend', ulElement);

let topicsDiscussed = [
    'Intro to DOM',
    'DOM Manipulation',
    'Getting Elements',
    'Creating and Removing Elements',
    'DOM Events',
    'DOM Traversal'
];

topicsDiscussed.forEach(topic => {
    let liElement = document.createElement('li');
    liElement.textContent = topic;
    liElement.classList.add('list-item');
    olElement.appendChild(liElement);
});

console.log(ulElement);
console.log(olElement);