const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementOnPage = [];

const selectorEl = document.querySelector('#ingredients');

ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = element;
  elementOnPage.push(listEl);


  // selectorEl.appendChild(listEl);
});

selectorEl.append(...elementOnPage);

