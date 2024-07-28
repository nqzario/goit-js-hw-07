function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  let textForElem = '';
  let widthAndHeight = 30;
  if (amount <= 100) {
    for (let i = 0; i < amount; i++) {
      textForElem += `<div style="background-color:${getRandomHexColor()}; width: ${widthAndHeight}px; height: ${widthAndHeight}px;"></div>`;
      widthAndHeight += 10;
    }
  } else {
    alert('Your number is more than 100')
  }
  
  boxes.insertAdjacentHTML('beforeend', textForElem);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}

const destroyButtomEl = document.querySelector('[data-destroy]');
const createButtonEl = document.querySelector('[data-create]');
const inputNumberEl = document.querySelector('#controls > input')

createButtonEl.addEventListener('click', () => { 
  createBoxes(inputNumberEl.value);
});
destroyButtomEl.addEventListener('click', () => {
  destroyBoxes();
})
