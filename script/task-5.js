const ref = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === '') {
    return (ref.nameOutput.textContent = 'незнакомец');
  }
  ref.nameOutput.textContent = event.currentTarget.value;
}
