const listCategoriesRef = document.querySelector('#categories');
console.log(`В списке ${listCategoriesRef.children.length} категории.`);

const nameCategoriesRef = document.querySelectorAll('.item');
nameCategoriesRef.forEach(category => {
  console.log(`Категория: ${category.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${
      category.querySelector('ul').querySelectorAll('li').length
    }`,
  );
});
