const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  const valueOfInput = event.target.value;
  const dataLength = inputRef.getAttribute('data-length');
  const classListOfInput = inputRef.classList;

  const mainNumber = Number(dataLength);

  if (mainNumber !== valueOfInput.length) {
    classListOfInput.add('invalid');
  }

  if (mainNumber === valueOfInput.length) {
    classListOfInput.remove('invalid');
    classListOfInput.add('valid');
  }
});
