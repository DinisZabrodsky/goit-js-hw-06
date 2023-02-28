function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const chengeColorButton = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const texstColor = document.querySelector('.color');

chengeColorButton.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  texstColor.textContent = color;
  bodyEl.style.backgroundColor = color;
};