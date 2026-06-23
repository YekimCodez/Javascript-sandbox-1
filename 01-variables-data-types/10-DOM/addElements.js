const container = document.querySelector('#header-home');
const list = document.querySelector('.list-home');
const inputs = document.querySelector('.inputs-home');
const input = document.querySelector('#item-input');
const button = document.querySelector('#add-button');
const clock = document.getElementById('clock');

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const amPm = hours >= 12 ? 'PM' : 'AM'; 

    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = hours.toString().padStart(2, '0'); // Pad hours with leading zero
    minutes = minutes.toString().padStart(2, '0'); // Pad minutes with leading zero
    seconds = seconds.toString().padStart(2, '0'); // Pad seconds with leading zero

    clock.innerHTML = `${hours}:${minutes}:${seconds} ${amPm}`;

};
updateClock()
setInterval(updateClock, 1000);

const todaysDate = document.querySelector('#todays_date');

function updateDate() {
    const today = new Date();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    todaysDate.textContent = formattedDate;
}
updateDate();
setInterval(updateDate, 3600000);

function addItem() {

    const listItem = document.createElement('li');
    listItem.className = "list-item";

    const deleteIcon = document.createElement('span');
    const checkedIcon = document.createElement('span');
    deleteIcon.className = "trash-outline";
    deleteIcon.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    checkedIcon.className = "checkmark-circle-outline";
    checkedIcon.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`;

    const iconsHome = document.createElement('ul');
    iconsHome.className = "icons-home";
    iconsHome.appendChild(checkedIcon);
    iconsHome.appendChild(deleteIcon);

    const newText = document.createTextNode(input.value).textContent.trim();

    if (newText === '') {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please enter a valid item.';
        errorMessage.style.color = 'red';
        input.classList.add('error');
        inputs.appendChild(errorMessage);
        deleteIcon.style.display = 'none';
        checkedIcon.style.display = 'none';
        button.disabled = true;
    } else if (input.focus()) {
        errorMessage.remove();
        input.classList.remove('error');
        deleteIcon.style.display = 'inline-block';
        checkedIcon.style.display = 'inline-block';
        button.disabled = false;
    }
    listItem.textContent = newText;
    listItem.appendChild(iconsHome);
    list.appendChild(listItem);
    input.value = '';

    console.log(listItem);

    deleteIcon.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    checkedIcon.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

}

button.addEventListener('click', addItem);