const inputName = document.querySelector('#name-input');
const outName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === "") {
        outName.textContent = "Anonymous";
    } else {
        outName.textContent = event.currentTarget.value;
    }
})

