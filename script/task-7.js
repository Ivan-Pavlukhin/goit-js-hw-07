const ref = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

ref.input.addEventListener('input', onRangeChange);

function onRangeChange() {
  ref.span.style.fontSize = ref.input.value + 'px';
}
