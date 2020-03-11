const titleRef = document.querySelector('#categories');
const childrenOfList = titleRef.children;

console.log(`В списке ${childrenOfList.length} категории.`);

const itemsOfListRef = document.querySelectorAll('.item');

const findInfo = list => {
  const itemsOfCategories = list.children;

  const titleOfList = itemsOfCategories[0].textContent;

  const listItems = itemsOfCategories[1].children;

  return `Категория : ${titleOfList}, 
Количество элементов ${listItems.length}`;
};

itemsOfListRef.forEach(item => {
  console.log(findInfo(item));
});
