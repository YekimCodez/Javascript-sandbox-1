const button = document.getElementById('fetchData');
const btn = document.createElement('button');
btn.textContent = 'JSON Data';
btn.id = 'jsonBtn';
btn.classList.add('json-btn');
document.body.appendChild(btn);

btn.addEventListener('click', getJsonData);  

let h2 = document.createElement('h2');
document.body.appendChild(h2);
h2.id = 'output';
h2.classList.add('output');

function getJsonData() {
    fetch('users.json')
    .then((res) => {
        return res.json()
    })

    .then((jsonData) => {
        let output = '<h2>Users</h2>';
        jsonData.forEach(function(user) {
        output += `
                <ul>
                    <li>${user.id}</li>
                    <li>${user.name}</li>
                    <li>${user.email}</li>            
                </ul>           
            `;
        })
        document.getElementById('output').innerHTML = output;
        console.log(jsonData);
    })
}


button.addEventListener('click', getData);

const style = document.createElement('style');

document.head.appendChild(style);

function getData() {
    fetch('sample.txt')
    .then((response) => response.text())
    .then((data) => {
        const dataContainer = document.createElement('div');
        const dataElement = document.createElement('p');

        dataContainer.classList.add('data-container');
        dataElement.classList.add('data-element');

        dataElement.textContent = data;
        dataContainer.appendChild(dataElement);
        document.body.appendChild(dataContainer);

        console.log('Data container added: ', dataContainer);
        console.log('Data element added: ', dataElement);        
    })
    .catch((error) => console.error('error fetching data', error));
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