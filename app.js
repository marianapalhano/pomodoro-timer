const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const right = document.querySelector('.right .progress');
const left = document.querySelector('.left .progress');
const animation = document.querySelectorAll('.progress');
const audio = new Audio('./assets/alert.wav');

function updateTimerHTML() {
    minutesEl.innerHTML = (minutes < 10) ? "0"+minutes : minutes;
    secondsEl.innerHTML = (seconds < 10) ? "0"+seconds : seconds;
}

function clearTimer() {
    clearInterval(timer);
    minutes = 2;
    seconds = 0;
    timer = undefined;
    updateTimerHTML();
    setProgressBar("paused");

    // Reset animation
    animation[0].classList.remove('progress');
    void animation[0].offsetWidth;
    animation[0].classList.add('progress');
    animation[1].classList.remove('progress');
    void animation[1].offsetWidth;
    animation[1].classList.add('progress');
}

function setProgressBar(state) {
    right.style.webkitAnimationPlayState = state;
    left.style.webkitAnimationPlayState = state;
}

let minutes, seconds, timer = undefined;
clearTimer();
setProgressBar("paused");

start.addEventListener('click', () => {
    if (timer) return;
    timer = setInterval(() => {
        if (!minutes && !seconds) {
            audio.play();
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
    setProgressBar("running");
});

pause.addEventListener('click', () => {
    clearInterval(timer);
    timer = undefined;
    setProgressBar("paused");
});

reset.addEventListener('click', () => {
    clearTimer();
});