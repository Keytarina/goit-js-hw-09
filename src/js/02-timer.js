import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector("input#datetime-picker");
const btnStart = document.querySelector("button[data-start]");

const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

let intervalId = 0;
let isIntervalActive = false;
let selectedDate = 0;

btnStart.setAttribute('disabled', 'true');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] <= Date.now()){
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        }
        btnStart.removeAttribute('disabled');
        selectedDate = selectedDates[0].getTime();
        console.log(selectedDate);
    },
  };

  flatpickr(inputDate, options);

  btnStart.addEventListener("click", () => {onStartBtnClick(selectedDate)});
  
  function onStartBtnClick(selectedDate) {
    if (isIntervalActive) {
        Notiflix.Notify.warning(
          'The countdown has already started! Please, reload the page.'
        );
        return;
      }
      Notiflix.Notify.success('The countdown has begun.');
      const intervalId = setInterval(() => {
        let preventTimerResult = selectedDate - new Date().getTime();
        let convertedTimerResult = convertMs(preventTimerResult);
    
        timerDays.textContent = addLeadingZero(
          String(convertedTimerResult.days)
        );
        timerHours.textContent = addLeadingZero(
          String(convertedTimerResult.hours)
        );
        timerMinutes.textContent = addLeadingZero(
          String(convertedTimerResult.minutes)
        );
        timerSeconds.textContent = addLeadingZero(
          String(convertedTimerResult.seconds)
        );
    
        if (preventTimerResult < 1000) {
          clearInterval(intervalId);
        }
      }, 1000);
      isIntervalActive = true;
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
  
    return {days, hours, minutes, seconds};
  }
  
  
  function addLeadingZero (value) {
    return value.padStart(2, 0);
  }
  
  
  
  


