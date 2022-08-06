const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientsList = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
});

list.append(...ingredientsList);
console.log(list);



// const markup = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join('');

// list.innerHTML = markup;