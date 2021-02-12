const ref = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('[type=number]'),
  render: document.querySelector('[data-action=render]'),
  destroy: document.querySelector('[data-action=destroy]'),
  boxes: document.querySelector('#boxes'),
};

function makeRandomColor() {
  return `rgb(${Math.round(Math.random() * (255 - 1) + 1)}, 
    ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(
    Math.random() * (255 - 1) + 1,
  )})`;
}

let amountInput = 0;
const divArr = [];

function creatBoxes(amount) {
  let size = 30;
  amount = amountInput;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');

    div.style.backgroundColor = makeRandomColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;

    divArr.push(div);
  }
  return ref.boxes.append(...divArr);
}

ref.controls.addEventListener('click', onInputValue);
function onInputValue(event) {
  amountInput = event.target.value;
  console.log(amountInput);
}
ref.render.addEventListener('click', creatBoxes);
ref.destroy.addEventListener('click', cleanBoxes);
function cleanBoxes() {
  console.log(ref.boxes.querySelectorAll('div').length);

  while (ref.boxes.firstChild) {
    ref.boxes.removeChild(boxes.firstChild);
  }

  // var myNode = document.getElementById('foo');
  // while (myNode.firstChild) {
  //   myNode.removeChild(myNode.firstChild);
  // }

  // let i = 0;
  // do {
  //   i += 1;
  //   ref.boxes.removeChild(ref.boxes.querySelector('div'));
  // } while (i <= ref.boxes.querySelectorAll('div').length);

  // console.log(ref.boxes);
  // for (let i = 0; i <= ref.boxes.querySelectorAll('div').length; i += 1) {
  //   ref.boxes.removeChild(ref.boxes.querySelector('div'));
  // }
}
