const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const createItemsList = ingredient => {
  const listOfItems = document.createElement('li');
  listOfItems.textContent = ingredient;

  return listOfItems;
};

const ingredientsList = ingredients.map(product => createItemsList(product));

listRef.append(...ingredientsList);
