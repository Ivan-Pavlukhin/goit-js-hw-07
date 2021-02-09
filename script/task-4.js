const counterDiv = document.querySelector('#counter');
const counterValueRef = document.querySelector('#value');
let numberCounterValue = Number(counterValueRef.textContent);

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

function onIncrementButtonClick() {
  numberCounterValue += 1;
  counterValueRef.innerHTML = numberCounterValue;
}

function onDecrementButtonClick() {
  numberCounterValue -= 1;
  counterValueRef.innerHTML = numberCounterValue;
}

decrementRef.addEventListener('click', onDecrementButtonClick);
incrementRef.addEventListener('click', onIncrementButtonClick);
