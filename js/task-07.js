const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

onInput();

fontSizeControl.addEventListener("input", onInput);

function onInput() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}
