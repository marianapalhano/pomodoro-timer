const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

let minutes = 25;
let seconds = 0;
let timer = null;

function updateTimerHTML() {
    minutesEl.innerHTML = (minutes < 10) ? "0"+minutes : minutes;
    secondsEl.innerHTML = (seconds < 10) ? "0"+seconds : seconds;
}

start.addEventListener('click', () => {
    timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
        } else {
            seconds--;        
            if (seconds === -1) {
                seconds = 59;
                minutes--;
            }
            updateTimerHTML();
        }        
    }, 1000);
});

pause.addEventListener('click', () => {
    clearInterval(timer);
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateTimerHTML();
});