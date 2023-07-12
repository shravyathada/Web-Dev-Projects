function btmload()
{
    document.getElementById("bottom").style.display="block";
}
function fontload()
{
    document.getElementById("bottom").style.display="none";
}

let setTimerVal = document.getElementById("setTime"),
    startResumeVal = document.getElementById("startResume"),
    pauseVal = document.getElementById("pause"),
    resetVal = document.getElementById("reset"),
    dayVal = document.getElementById("dayval"),
    hourVal = document.getElementById("hourval"),
    minVal = document.getElementById("minval"),
    secVal = document.getElementById("secval"),
    daysVal = document.getElementById("daysInput"),
    minutesVal = document.getElementById("minutesInput"),
    secondsVal = document.getElementById("secondsInput"),
    hoursVal = document.getElementById("hoursInput");
let day = 0,hour = 0,min = 0,sec = 0,time = 0,interval = null;


setTimerVal.addEventListener("click", () => {
  if (
    validate(daysVal) |
    validate(hoursVal) |
    validate(minutesVal) |
    validate(secondsVal)
  ) {
    let allInputes = document.querySelectorAll('input')
    allInputes.forEach(value => {
      value.classList.remove('inactive-input')
    })
    dayVal.innerHTML = daysVal.value;
    hourVal.innerHTML = hoursVal.value;
    minVal.innerHTML = minutesVal.value;
    secVal.innerHTML = secondsVal.value;
    if (daysVal.value === "") {
      dayVal.innerHTML = "00";
    }
    if (hoursVal.value === "") {
      hourVal.innerHTML = "00";
    }
    if (minutesVal.value === "") {
      minVal.innerHTML = "00";
      
    }
    if (secondsVal.value === "") {
      secVal.innerHTML = "00";
    }
    if (daysVal.value.length == 1) {
      dayVal.innerHTML = "0" + daysVal.value;
    }
    if (hoursVal.value.length == 1) {
      hourVal.innerHTML = "0" + hoursVal.value;
    }
    if (minutesVal.value.length == 1) {
      minVal.innerHTML = "0" + minutesVal.value;
    }
    if (secondsVal.value.length == 1) {
      secVal.innerHTML = "0" + secondsVal.value;
    }
    day = parseInt(dayVal.innerHTML);
    hour = parseInt(hourVal.innerHTML);
    min = parseInt(minVal.innerHTML);
    sec = parseInt(secVal.innerHTML);
    time = day * 86400 + min * 60 + hour * 3600 + sec;
    daysVal.value = "";
    hoursVal.value = "";
    minutesVal.value = "";
    secondsVal.value = "";
  }
});

startResumeVal.addEventListener("click", () => {
  if (interval) {
    return;
  }
  interval = setInterval(startTimer, 1000);
});
pauseVal.addEventListener("click", () => {
  daysVal.disabled = false;
  hoursVal.disabled = false;
  minutesVal.disabled = false;
  secondsVal.disabled = false;
  setTimerVal.disabled = false;

  clearInterval(interval);
  interval = null;
});
resetVal.addEventListener("click", () => {
   let allInputes = document.querySelectorAll("input");
   allInputes.forEach((value) => {
     value.classList.remove("inactive-input");
   });
  stop();
  clearInterval(interval);
  interval = null;
  time = 0;
  dayVal.innerHTML = "00";
  hourVal.innerHTML = "00";
  minVal.innerHTML = "00";
  secVal.innerHTML = "00";
  daysVal.disabled = false;
  hoursVal.disabled = false;
  minutesVal.disabled = false;
  secondsVal.disabled = false;
  setTimerVal.disabled = false;
});
const startTimer = () => {
  if (time === 0) {
    console.log("hi");
    clearInterval(interval);
    interval = null;
  } else {
    daysVal.disabled = true;
    hoursVal.disabled = true;
    minutesVal.disabled = true;
    secondsVal.disabled = true;
    setTimerVal.disabled = true;
    time--;
    var days = Math.floor(time / (60 * 60 * 24));
    var hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((time % (60 * 60)) / 60);
    var seconds = Math.floor(time % 60);
    if (days < 10) days = "0" + days;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    dayVal.innerHTML = days;
    hourVal.innerHTML = hours;
    minVal.innerHTML = minutes;
    secVal.innerHTML = seconds;
    if (time < 0) {
      clearInterval(interval);
      interval = null;
      time = 0;
      dayVal.innerHTML = "00";
      hourVal.innerHTML = "00";
      minVal.innerHTML = "00";
      secVal.innerHTML = "00";
    }
  }
};
const validate = (element) => {
  let regex = /^[0-9]+$/;
  if ((element.value != "") & regex.test(element.value)) {
    element.classList.remove("inactive-input");
    return true;
  } else {
    element.classList.add("inactive-input");
    return false;
  }
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
