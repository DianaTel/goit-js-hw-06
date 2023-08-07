const input = document.querySelector('#validation-input');

input.addEventListener("blur", () => {
  const inputValue = input.value;
  const dataLength = input.dataset.length;

  if (inputValue.length === Number(dataLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});