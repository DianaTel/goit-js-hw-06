const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  const baseSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${baseSize + i * 10}px`;
    box.style.height = `${baseSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = '';
}