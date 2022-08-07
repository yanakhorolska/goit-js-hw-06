const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body')
btn.addEventListener('click', changeColor);

function changeColor() {
  const backColor = getRandomHexColor()
  span.textContent = backColor;
  body.style.backgroundColor = backColor;
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
