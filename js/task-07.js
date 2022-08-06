const inputControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')


inputControl.addEventListener('input', changeFunction)

function changeFunction() {
    text.style.fontSize = `${Number(inputControl.value)}px`;
}