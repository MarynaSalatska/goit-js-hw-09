import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

const dataBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');
const dataInput = document.querySelector('#datetime-picker');

let timerId = null;
let selected = null;
dataBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future!');
      dataBtn.disabled = true;
    } else {
      console.log(selectedDates[0]);
      selected = selectedDates[0];
      dataBtn.disabled = false;
    }
  },
};

const fl = flatpickr('#datetime-picker', options);
dataBtn.addEventListener('click', onBtnStart);

function onBtnStart() {
  dataBtn.disabled = true;
  dataInput.disabled = true;
  Notiflix.Notify.success('Let&#39;s go!');

  timerId = setInterval(() => {
    const deltaTime = selected.getTime() - Date.now();
    if (deltaTime <= 0) {
      clearInterval(timerId);
      Notiflix.Notify.info('Time is up!');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
