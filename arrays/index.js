// Create a 2D Array

let  topics = [
'Intro to DOM',
'Events',
'DOM Manipulation',
'Forms',
'Web Storage'
];

topics.push('APIs'); // The push() method adds one or more elements to the end of an array and returns the new length of the array.
topics.unshift('JavaScript'); // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.   
topics.splice(1, 0, 'Data Structures'); // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The first parameter (1) specifies the index at which to start changing the array, the second parameter (0) specifies the number of elements to remove, and the third parameter ('Data Structures') is the element to add to the array.

console.log(topics.length);

const pElement = document.getElementById('text');
pElement.textContent = topics[0];
pElement.classList.add('highlighted');

const ulElement = document.createElement('ul');
ulElement.classList.add('topics-list');
ulElement.id = 'topics-list';

// topics.forEach(function(text) {
//     const liElement = document.createElement('li');
//     liElement.textContent = text;
//     liElement.classList.add('topic-item');  
//     ulElement.appendChild(liElement);
//     document.body.appendChild(ulElement);
//     console.log(text);
//     console.log(liElement);
// });

for (let i = 0; i < topics.length; i++){ // The for loop iterates through the topics array, starting from index 0 and continuing until it reaches the length of the array (topics.length). For each iteration, it executes the block of code inside the loop.
    const liElement = document.createElement('li');
    liElement.textContent = topics[i]; // The textContent property sets or returns the text content of the specified node, and all its descendants. In this case, it sets the text content of the liElement to the current topic in the loop (topics[i]).
    liElement.classList.add('topic-item');
    ulElement.appendChild(liElement);
    document.body.appendChild(ulElement);
    console.log(liElement);
};


// Iterating through the 2D array using the for loop and print each individual element to the console

// for (let i = 0; i < numbers.length; i++){
//     for( let j = 0; j < numbers[i].length; j++){
//         console.log(numbers[i][j]);
        // console.log(i, j, numbers[i][j]);
//     }
// }

