function getTime() {
const clock = new Date();
const hour = String(clock.getHours());
const minutes = String(clock.getMinutes());
const seconds = String(clock.getSeconds());
const clockText = document.querySelector("#clock");
clockText.innerText = `${hour.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}

getTime();
setInterval(getTime, 1000);