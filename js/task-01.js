const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);



const firstItem = list.firstElementChild;
const firstTitle = firstItem.firstElementChild;
const listOfAnimals = firstTitle.nextElementSibling.children;
console.log(`Category: ${firstTitle.textContent}`);
console.log(`Elements: ${listOfAnimals.length}`);

const secondItem = firstItem.nextElementSibling;
const secondTitle = secondItem.firstElementChild;
const listOfProducts = secondTitle.nextElementSibling.children;
console.log(`Category: ${secondTitle.textContent}`);
console.log(`Elements: ${listOfProducts.length}`);


const thirdItem = secondItem.nextElementSibling;
const thirdTitle = thirdItem.firstElementChild;
const listOfTechnologies = thirdTitle.nextElementSibling.children;
console.log(`Category: ${thirdTitle.textContent}`);
console.log(`Elements: ${listOfTechnologies.length}`);





