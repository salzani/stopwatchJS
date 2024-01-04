const minutesE1 = document.querySelector("#minutes")
const secondsE1 = document.querySelector("#seconds")
const millisecondsE1 = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const resumeBtn = document.querySelector("#resume")
const resetBtn = document.querySelector("#reset")


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;


startBtn.addEventListener("click", startTime)
pauseBtn.addEventListener("click", pauseTime)
resumeBtn.addEventListener("click", resumeTime)
resetBtn.addEventListener("click", resetTime)

function startTime(){
    interval = setInterval(() =>{
        if(!isPaused) {
            milliseconds += 10

            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }
        if(seconds === 60) {
            minutes++;
            seconds = 0;
        }

        minutesE1.textContent = formatTime(minutes);
        secondsE1.textContent = formatTime(seconds);
        millisecondsE1.textContent = formatMilliseconds(milliseconds);

    }
  },10)

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseTime(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTime(){
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTime(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    if(isPaused === true){
        isPaused = false;
    }

    minutesE1.textContent = "00";
    secondsE1.textContent = "00";
    millisecondsE1.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}

