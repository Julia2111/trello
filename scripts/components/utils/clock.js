export function initClock() {
  console.log("initClock запустился");
  setInterval(function () {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    const clock = hours + ":" + minutes + ":" + seconds;
    const time = document.getElementById("time");
    time.innerHTML = clock;
  }, 1000);
}
