const create = document.querySelector('[data-create');
const destroy = document.querySelector('[data-destroy]');
const boxesBlock = document.querySelector('#boxes');

create.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);



function getAmount() {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
    const beginSize = 30;
    const nextSize = beginSize + i * 10;
    const div = document.createElement("div");
    div.style = `width: ${nextSize}px; height: ${nextSize}px; background-color: ${getRandomHexColor()}`;
    boxesBlock.appendChild(div);
  }
}
function destroyBoxes() {
  boxesBlock.innerHtml = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}