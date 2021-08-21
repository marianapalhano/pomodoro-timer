const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

function updateTimerHTML() {
    minutesEl.innerHTML = (minutes < 10) ? "0"+minutes : minutes;
    secondsEl.innerHTML = (seconds < 10) ? "0"+seconds : seconds;
}

function clearTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    timer = undefined;
    updateTimerHTML();
}

let minutes, seconds, timer = undefined;
clearTimer();

start.addEventListener('click', () => {
    if (timer) return;
    timer = setInterval(() => {
        if (!minutes && !seconds) {
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
    timer = undefined;
});

reset.addEventListener('click', () => {
    clearTimer();
});