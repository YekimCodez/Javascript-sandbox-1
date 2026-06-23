// const heading = document.querySelector('#myHeading');
// console.log(heading.textContent); // Output: My Heading

// heading.textContent = 'Updated Heading';
// console.log(heading.textContent); // Output: Updated Heading

// heading.style.color = 'blue';
// heading.style.fontSize = '24px';

// let pElements = document.getElementsByTagName('p');
// console.log(pElements.length); // Output: 3
// for (let pElement of pElements) {
//     pElement.style.color = 'green';
// };

// let customDivs = document.getElementsByClassName('custom-bg');
// for (let div of customDivs) {
//     div.style.backgroundColor = 'lightgray';
//     div.style.padding = '10px';
// }
// querySelectorAll returns all of the elements that match the selector. It returns a static NodeList, which is a collection of nodes that can be accessed like an array. If no matches are found, it returns an empty NodeList.    

// let pElementsInDivs = document.querySelectorAll('div p');
// console.log(pElementsInDivs.length); // Output: 2
// console.log(pElementsInDivs[0].textContent);
// console.log(pElementsInDivs[1].textContent);
// pElementsInDivs[0].textContent = 'Updated paragraph inside div.';
// console.log(pElementsInDivs[0].textContent = 'Updated paragraph inside div.');

// for (let elements of pElementsInDivs) {
//     elements.style.fontStyle = 'italic';
//     elements.style.fontWeight = 'bold';
//     elements.style.color = 'purple';
// };
// querySelector returns the first element that matches the specified CSS selector(s) in the document. If no matches are found, it returns null.
// let specialP = document.querySelector('div>p:not(div.custom-bg>p');
// specialP.textContent = 'I am a special paragraph element!';
// specialP.style.textDecoration = 'underline';
// console.log(specialP);