var numSquares = 6;
var colors = [];
var pickedColor;
var squars = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#color-display');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var easyButton = document.querySelector('.mode');
init();
function init() {
    colorDisplay.textContent = pickedColor;
    setupSquares();
    setupMode();
    reset();
}
resetButton.addEventListener('click', function () { return reset(); });
function setupSquares() {
    var _this = this;
    for (var i = 0; i < squars.length; i++) {
        squars[i].style.backgroundColor = colors[i];
        squars[i].addEventListener('click', function () {
            var ckickedColor = _this.style.backgroundColor;
            if (ckickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct';
                resetButton.textContent = 'Play Again';
                changeColors(pickedColor);
            }
            else {
                _this.style.background = '#232323';
                messageDisplay.textContent = 'try again';
            }
        });
    }
}
function setupMode() {
    var _this = this;
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            for (var i_1 = 0; i_1 < modeButtons.length; i_1++) {
                modeButtons[i_1].classList.remove('selected');
            }
            _this.classList.add('selected');
            if (_this.textContent === 'Easy') {
                numSquares = 3;
            }
            else {
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
    for (var i = 0; i < squars.length; i++) {
        if (colors[i]) {
            squars[i].style.display = 'block';
            squars[i].style.background = colors[i];
        }
        else {
            squars[i].style.display = 'non';
        }
    }
}
function changeColors(color) {
    for (var i = 0; i < squars.length; i++) {
        squars[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}
function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function genRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr;
}
function makeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}