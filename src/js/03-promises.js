import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");
const refs = {
  inputFirstDelay: document.querySelector("[name='delay']"),
  inputDelayStep: document.querySelector("[name='step']"),
  inputAmount: document.querySelector("[name='amount']"),
}

form.addEventListener("submit", onFormSubmit);


function onFormSubmit(event) {
  console.log("escfneksnfclen");
  event.preventDefault();


  let firstDelay = refs.inputFirstDelay.value;
  
  console.log(firstDelay);
}
 
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
