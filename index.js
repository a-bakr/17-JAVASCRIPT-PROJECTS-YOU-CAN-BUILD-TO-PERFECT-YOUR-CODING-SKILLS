window.onload = () => {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const resetBtn = document.getElementById('resetBtn');
  const appendTens = document.getElementById('tens');
  const appendSeconds = document.getElementById('seconds');
  let tens = 00;
  let seconds = 00;
  let Interval = '';

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stopBtn.onclick = () => clearInterval(Interval);

  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;
    if (tens < 9) {
      appendTens.innerHTML = '0';
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log('second');
      seconds++;
      appendSeconds.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.innerHTML = '0' + tens;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
