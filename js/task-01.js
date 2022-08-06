const totalEl  = document.querySelectorAll('.item');
const numberOfCategories = totalEl.length;

totalEl.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Element: ${element.lastElementChild.children.length}`);
});

console.log(`Number of categories: ${numberOfCategories}`);