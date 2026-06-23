const button = document.getElementById('fetchData');

button.addEventListener('click', getData);

const style = document.createElement('style');

document.head.appendChild(style);

function getData() {
    fetch('sample.txt')
    .then((response) => response.text())
    .then((data) => {
        const dataContainer = document.createElement('div');
        const dataElement = document.createElement('p');

        dataElement.textContent = data;
        dataContainer.appendChild(dataElement);
        document.body.appendChild(dataContainer);

        const container = document.querySelectorAll('div');

        container.forEach((div) => {
            div.classList.add('data-container');
            console.log('Data container added: ', div);
        });        
    });
}

style.textContent = `
    button {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
    }

    button:hover {
        background-color: darkblue;
        cursor: pointer;
    }

    .data-container {
        margin-top: 0.2em;
        padding: 0.2rem;
    }
`;

// async function getData() {
//     try {
//         const response = await fetch('sample.txt');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.text();
//         const dataContainer = document.createElement('div');
//         dataContainer.textContent = data;
//         document.body.appendChild(dataContainer);
//         const container = document.querySelectorAll('div');
//         container.forEach((div) => {
//         div.classList.add('data-container');
//         console.log('Data container added:', div);
// });
//     } catch (error) {
//             console.error('Error:', error);
//         }
// }