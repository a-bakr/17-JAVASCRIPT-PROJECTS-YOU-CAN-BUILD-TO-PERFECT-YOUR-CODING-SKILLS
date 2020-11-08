let numSquares = 6;
let colors = [];
let pickedColor;

const squars = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('#color-display');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');
const easyButton = document.querySelector('.mode');

init();

function init() {
  colorDisplay.textContent = pickedColor;
  setupSquares();
  setupMode();
  reset();
}

resetButton.addEventListener('click', () => reset());

function setupSquares() {
  for (let i = 0; i < squars.length; i++) {
    squars[i].style.backgroundColor = colors[i];
    squars[i].addEventListener('click', () => {
      let ckickedColor = this.style.backgroundColor;
      if (ckickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct';
        resetButton.textContent = 'Play Again';
        changeColors(pickedColor);
      } else {
        this.style.background = '#232323';
        messageDisplay.textContent = 'try again';
      }
    });
  }
}

function setupMode() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', () => {
      for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove('selected');
      }
      this.classList.add('selected');
      if (this.textContent === 'Easy') {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function reset() {
  colors = genRandomColors(numSquares);
  pickedColor = chooseColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = '#2c8E99';
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  for (let i = 0; i < squars.length; i++) {
    if (colors[i]) {
      squars[i].style.display = 'block';
      squars[i].style.background = colors[i];
    } else {
      squars[i].style.display = 'non';
    }
  }
}

function changeColors(color) {
  for (let i = 0; i < squars.length; i++) {
    squars[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
  }
}

function chooseColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function genRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(makeColor());
  }
  return arr;
}

function makeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
