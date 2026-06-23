const wrapper = document.querySelector('.wrapper');
const ul = wrapper.querySelector('#main-list');
const ol = wrapper.querySelector('.sub-list');
// const ul = container.querySelector('#main-list');

console.log(wrapper);
console.log(ul);
console.log(ol);

const firstMainListItem = ul.querySelector('#first-mainlist-item');

const firstSubListItem = ol.querySelector('#first-sublist-item');


console.log(firstMainListItem);
console.log(firstSubListItem);


firstMainListItem.textContent = 'Updated main list item 1';
firstSubListItem.textContent = 'Updated sub list item 1';

function switchText() {
    const temp = firstMainListItem.textContent;
    firstMainListItem.textContent = firstSubListItem.textContent;
    firstSubListItem.textContent = temp;
}

firstMainListItem.addEventListener('click', switchText);