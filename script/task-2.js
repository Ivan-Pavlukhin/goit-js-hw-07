const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsRef = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(ingredient => {
  //   console.log(ingredient);
  const textItemRef = document.createElement('li');
  textItemRef.textContent = ingredient;
  return textItemRef;
});

listIngredientsRef.append(...ingredientsArr);
