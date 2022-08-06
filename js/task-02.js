const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');


function itemMarkup(value) {
  const itemMarkup = document.createElement('li');
  itemMarkup.classList.add('item');
  itemMarkup.textContent = value;
  return itemMarkup;
}

const listMarkup = ingredients.map(itemMarkup);

listEl.append(...listMarkup);


