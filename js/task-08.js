const submitInput = document.querySelector('.login-form');

submitInput.addEventListener('submit', onFormSubmit);

const savePassword = [];

function onFormSubmit (event) {
    event.preventDefault();

    const newUser = {};
   

    const validEmail = event.currentTarget.elements.email.value;
    const validPass = event.currentTarget.elements.password.value;

    if (validEmail === "" || validPass === "") {
        alert("Введіть всі необхідні дані!!!");
    } else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            newUser[name] = value;

        });

        savePassword.push(newUser);
    };
};




