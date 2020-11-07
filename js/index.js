// JavaScript Drum App

const playingClass = 'playing';
const crashRide = document.getElementById('crash-ride');
const hiHatTop = document.getElementById('hihat-top');

const animateCrashOrRide = () => {
  crashRide.style.transform = 'rotate(odeg) scale(1.5)';
};

const animateHiHatClosed = () => {
  hiHatTop.style.top = '171px';
};

const playSound = (e) => {
  const keyCode = e.keyCode;
  const keyElement = document.querySelector(`div[data-key=${keyCode}]`);

  if (!keyElement) return;

  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  audioElement.currentTime = 0;
  audioElement.play();

  switch (keyCode) {
    case 69:
    case 82:
      animateCrashOrRide();
      break;
    case 75:
      animateHiHatClosed();
      break;

    default:
      break;
  }

  keyElement.classList.add(playingClass);
};

const removeCrashRideTransition = (e) => {
  if (e.propertyName !== 'transform') return;

  e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
};

const removeHiHatTopTransition = (e) => {
  if (e.propertyName !== 'top') return;

  e.target.style.top = '166px';
};

const removeKeyTransition = (e) => {
  if (e.propertyName !== 'transform') return;

  e.target.classList.remove(playingClass);
};

const drumKeys = Array.from(document.querySelectorAll('.key'));

drumKeys.forEach((key) => {
  key.addEventListener('transitionend', removeKeyTransition);
});

crashRide.addEventListener('transitionend', removeCrashRideTransition);
hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

window.addEventListener('keydown', playSound);