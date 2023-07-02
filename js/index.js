const timerForm = document.getElementById("timerForm");
const timerRestH = document.getElementById("timerRestH");
const timerRestM = document.getElementById("timerRestM");
const timerRestS = document.getElementById("timerRestS");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");

let intervalId;
let newInterval = 0;
let isPaused = false;

timerForm.addEventListener("submit", formHandler);
pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);

function formHandler(event) {
  event.preventDefault();
  const intervalValue = +document.getElementById("interval").value;

  if (typeof intervalValue === "number" && intervalValue > 0) {
    clearInterval(intervalId);

    newInterval = intervalValue;
    updateTimerDisplay();

    intervalId = setInterval(() => {
      if (isPaused) return;

      if (newInterval > 0) {
        newInterval--;
        updateTimerDisplay();
        console.log("newInterval: ", newInterval);
      } else {
        console.log("clearInterval");
        clearInterval(intervalId);
      }
    }, 1000);

    pauseButton.disabled = false;
    resumeButton.disabled = true;
  }
}

function pauseTimer() {
  isPaused = true;
  pauseButton.disabled = true;
  resumeButton.disabled = false;
}

function resumeTimer() {
  isPaused = false;
  pauseButton.disabled = false;
  resumeButton.disabled = true;
}

function updateTimerDisplay() {
  const hours = Math.floor(newInterval / 3600);
  const minutes = Math.floor((newInterval % 3600) / 60);
  const seconds = newInterval % 60;

  if (hours > 0) {
    timerRestH.style.display = "inline";
    timerRestH.innerText = hours + " h.";
  } else {
    timerRestH.style.display = "none";
  }

  if (minutes > 0) {
    timerRestM.style.display = "inline";
    timerRestM.innerText = minutes + " m.";
  } else {
    timerRestM.style.display = "none";
  }

  timerRestS.innerText = seconds + " s.";
}
