let hourText = document.querySelector("#hour");
let minutesText = document.querySelector("#minutes");
let secondsText = document.querySelector("#seconds");

const background = document.querySelector(".background");

const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");

let hours = 0;
let minutes = 0;
let seconds = 0;

let paused = false;
let isInterval;

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const runningClock = () => {
  isInterval = setInterval(() => {
    if (!paused) {
      seconds++;

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      if (minutes === 60) {
        hours++;
        minutes = 0;
      }

      hourText.textContent = formatTime(hours);
      minutesText.textContent = formatTime(minutes);
      secondsText.textContent = formatTime(seconds);
    }
  }, 1000);
};

startBtn.addEventListener("click", () => {
  clearInterval(isInterval);
  runningClock();

  background.classList.add("background-start");
  background.classList.remove("background-pause");
  background.classList.remove("background-stop");

  pauseBtn.style.display = "block";
  stopBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
  clearInterval(isInterval);

  background.classList.add("background-pause");
  background.classList.remove("background-start");
  background.classList.remove("background-stop");
});

stopBtn.addEventListener("click", () => {
  clearInterval(isInterval);

  hours = 0;
  minutes = 0;
  seconds = 0;

  hourText.textContent = "00";
  minutesText.textContent = "00";
  secondsText.textContent = "00";

  background.classList.add("background-stop");
  background.classList.remove("background-start");
  background.classList.remove("background-pause");
});
