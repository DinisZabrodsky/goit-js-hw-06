const formInput = document.querySelector('#validation-input');



formInput.addEventListener('blur', (event) => {
    const nedLength = Number(formInput.dataset.length);
    const inputSimvol = event.currentTarget.value.length;

    if (nedLength <= inputSimvol) {
        formInput.classList.remove('invalid');
        formInput.classList.add('valid');

    } else {
        formInput.classList.remove('valid');
        formInput.classList.add('invalid');
    };


})