const form = document.querySelector('#myForm');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('#submitBtn');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        console.log(input.id,
        JSON.stringify(input.value),
        input.value.length);

        if (input.value.trim() === '') {
            isValid = false;
            input.style.border = '2px solid red';
        } else {
            input.style.border = '2px solid green';
        }
    })
    console.log('Form is valid:', isValid);
});

