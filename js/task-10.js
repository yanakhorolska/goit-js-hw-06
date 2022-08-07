// Напиши скрипт створення і очищення колекції елементів.

// Користувач вводить кількість елементів в input і натискає кнопку "Створити",
// після чого рендериться колекція.
// Натисненням на кнопку "Очистити", колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.




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