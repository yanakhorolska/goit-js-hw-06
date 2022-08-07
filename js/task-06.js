// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.

// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.



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