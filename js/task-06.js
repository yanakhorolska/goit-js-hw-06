
const input = document.querySelector('#validation-input')


input.addEventListener('focus', onFocus);
input.addEventListener('blur', onBlur);

function onBlur() {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
    }
}
function onFocus() {
    input.classList.remove('valid', 'invalid');
}