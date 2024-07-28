function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

const onChangeClr = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  changeColor.textContent = newColor;
}

btnChangeColor.addEventListener('click', onChangeClr);