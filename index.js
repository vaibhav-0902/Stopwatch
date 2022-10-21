console.log("hello");

let [count, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = document.querySelector('.timer');
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");

let currentTimer = null;

start.addEventListener("click", () => {
    if (currentTimer !== null) {
        clearInterval(currentTimer);
    }
    currentTimer = setInterval(displayTimer, 10);
})

pause.addEventListener("click", () => {
    clearInterval(currentTimer);
})

restart.addEventListener("click", () => {
    clearInterval(currentTimer);
    [count, seconds, minutes, hours] = [0,0,0,0];
    timer.innerHTML = '00:00:00:000';
})

function displayTimer() {
    count += 10;
    if (count == 1000) {
        count = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let cnt = count < 10 ? "00" + count : count < 100 ? "0" + count : count;

    timer.innerHTML = `${h}:${m}:${s}:${cnt}`;
}