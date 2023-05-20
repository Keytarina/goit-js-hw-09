import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");
const refs = {
  inputFirstDelay: document.querySelector("[name='delay']"),
  inputDelayStep: document.querySelector("[name='step']"),
  inputAmount: document.querySelector("[name='amount']"),
}

form.addEventListener("submit", onFormSubmit);
 
function onFormSubmit(event) {
  event.preventDefault();

  let firstDelay = Number(refs.inputFirstDelay.value);
  let delayStep = Number(refs.inputDelayStep.value);
  let amount =  Number(refs.inputAmount.value);

  for(let i = 0; i < amount; i++){
    createPromise(i, firstDelay);
    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldResolve){
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
    promise.then(() => {
      `${Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)}`;
    })
    .catch(() => {
      `${Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)}`;
    });
}


