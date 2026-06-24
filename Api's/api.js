const button = document.getElementById('fetchData');

// JSON button
const btn = document.createElement('button');
btn.textContent = 'JSON Data';
btn.id = 'jsonBtn';
btn.classList.add('json-btn');
document.body.appendChild(btn);

btn.addEventListener('click', getJsonData); 
// JSON button 

// Api button
const apiButton = document.createElement('button');
apiButton.textContent = 'Api Data';
apiButton.id = 'apiData';
apiButton.classList.add('api-data');
document.body.appendChild(apiButton);

apiButton.addEventListener('click', getApiData);

const divEl = document.createElement('div');
divEl.setAttribute('class', 'container');
divEl.id = 'apiDataContainer';
document.body.appendChild(divEl);

function getApiData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json()
    })

    .then((apiData) => {
        let getOutput = '<h2>API Data</h2>';
        apiData.forEach(function(user){
            getOutput += `<div class="flat-card">
                <h3>ID: ${user.id}</h3>
                <h3>ID: ${user.company?.name}</h3>
                <p>Name: ${user.name}</p>
                <p>Address: ${user.address?.city}</p>
                <p>Phone: ${user.phone}</p>            
                <p>Email: ${user.email}</p>            
                <p>Username: ${user.username}</p>            
                <p>Website: ${user.website}</p>            
            </div>`;
        })
        
        document.getElementById('apiDataContainer').innerHTML = getOutput;


        console.log(apiData);

    })
    .catch((error) => console.error('error fetching data', error));
}
// Api button

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
                    <li>Id: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>            
                    <li>Username: ${user.username}</li>  
                    <li>Is Active: ${user.isActive}</li>  
                    <li>Role: ${user.role}</li>            
                    <li>Skills: ${user.skills}</li>            
                </ul>           
            `;
        })
        document.getElementById('output').innerHTML = output;
        console.log(jsonData);
    })
    .catch((error) => console.error('error fetching data', error));
}

// Get text file
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
//Get text file

style.textContent = `
    button {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
        margin: 10px;
    }

    button:hover {
        background-color: darkblue;
        cursor: pointer;
    }

    .data-container {
        margin-top: 0.2em;
        padding: 0.2rem;
    }
    
    .container {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        gap: 0.5rem;    
    }
    
    .flat-card {
        width: 240px;
        padding: 16px;
        background-color: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-family: sans-serif;
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