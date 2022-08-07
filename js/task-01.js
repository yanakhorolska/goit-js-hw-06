// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у спику ul#categories,
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



// const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    const total = element.querySelectorAll("li");
    console.log(`Elements: ${total.length}`);
});






// const firstItem = list.firstElementChild;
// const firstTitle = firstItem.firstElementChild;
// const listOfAnimals = firstTitle.nextElementSibling.children;
// console.log(`Category: ${firstTitle.textContent}`);
// console.log(`Elements: ${listOfAnimals.length}`);

// const secondItem = firstItem.nextElementSibling;
// const secondTitle = secondItem.firstElementChild;
// const listOfProducts = secondTitle.nextElementSibling.children;
// console.log(`Category: ${secondTitle.textContent}`);
// console.log(`Elements: ${listOfProducts.length}`);


// const thirdItem = secondItem.nextElementSibling;
// const thirdTitle = thirdItem.firstElementChild;
// const listOfTechnologies = thirdTitle.nextElementSibling.children;
// console.log(`Category: ${thirdTitle.textContent}`);
// console.log(`Elements: ${listOfTechnologies.length}`);





