const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onInputCheck);

function onInputCheck(event) {
  const lengthInput = event.target.value.length;
  const dataAttributeInput = Number(
    validationInputRef.getAttribute('data-length'),
  );

  if (lengthInput !== dataAttributeInput) {
    validationInputRef.classList = 'invalid';
  } else {
    validationInputRef.classList = 'valid';
  }
}
