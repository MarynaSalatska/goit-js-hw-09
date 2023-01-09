const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');

let timerId = null;
stopBtn.disabled = true;
const INTERVAL_DELAY = 1000;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);
  return;
}

function onStopBtn() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
