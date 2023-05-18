const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timerId = 0;

btnStart.addEventListener("click", onStartBtnClick);
btnStop.addEventListener("click", () => {onStopBtnClick(timerId)});

function onStartBtnClick () {
    btnStart.setAttribute("disabled", true);
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopBtnClick (timerId) {
    btnStart.removeAttribute("disabled");
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }