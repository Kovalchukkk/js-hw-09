import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  start: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let selectedTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('onClose: ', selectedDates[0]);

    selectedTime = selectedDates[0].getTime();
    const currentTime = Date.now();

    if (selectedTime < currentTime) {
      Notify.failure('Please choose a date in the future');
      refs.start.setAttribute('disabled', true);
    } else {
      refs.start.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);
