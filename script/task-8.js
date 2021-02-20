const ref = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('[type=number]'),
  render: document.querySelector('[data-action=render]'),
  destroy: document.querySelector('[data-action=destroy]'),
  boxes: document.querySelector('#boxes'),
};

let amountInput = 0;
const divArr = [];

ref.controls.addEventListener('click', onInputValue);
ref.render.addEventListener('click', creatBoxes);
ref.destroy.addEventListener('click', cleanBoxes);

function makeRandomColor() {
  return `rgb(${Math.round(Math.random() * (255 - 1) + 1)}, 
    ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(
    Math.random() * (255 - 1) + 1,
  )})`;
}

function creatBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amountInput; i += 1) {
    const div = document.createElement('div');

    div.style.backgroundColor = makeRandomColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;

    divArr.push(div);
  }
  return ref.boxes.append(...divArr);
}

function onInputValue(event) {
  amountInput = event.target.value;
}

function cleanBoxes() {
  divArr.length = 0;

  while (ref.boxes.firstChild) {
    ref.boxes.removeChild(boxes.firstChild);
  }
}
