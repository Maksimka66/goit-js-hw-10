// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import * as iziToast from 'izitoast';

const startButton = document.querySelector('[data-start]');
let userSelectedDate;
startButton.setAttribute('disabled', true);

const timerOfInput = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate > new Date()) {
      startButton.removeAttribute('disabled');
    } else {
      iziToast.show({
        title: 'Please choose a date in the future',
        position: 'center',
      });
    }
  },
});

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

startButton.addEventListener('click', () => {
  startButton.setAttribute('disable');
  const interval = userSelectedDate - new Date();
  const { days, hours, minutes, seconds } = convertMs(interval);
  const remainingTime = setInterval(interval, 1000);
  if (remainingTime <= 0) {
    clearInterval(remainingTime);
    return;
  }
});
