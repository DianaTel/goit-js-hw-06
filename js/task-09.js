const nameColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


buttonColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
});


