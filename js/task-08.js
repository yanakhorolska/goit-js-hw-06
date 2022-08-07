const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');
const form = document.querySelector('.login-form');
const submitBtn = form.lastElementChild;

form.addEventListener('submit', sendForm);
const dataObject = {};

function sendForm(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in the fields!');
    }
    const result = {
        email: email.value,
        password: password.value,
    };
    console.log(result);
    event.currentTarget.reset();

}
