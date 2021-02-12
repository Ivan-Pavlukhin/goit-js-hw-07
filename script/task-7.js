const ref = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

ref.input.addEventListener('input', onRangeChange);

function onRangeChange() {
  // console.log(Number(ref.input.value));
  ref.span.style.fontSize = ref.input.value + 'px';
  //   ref.span.style.fontSize = event.clientX;
}
