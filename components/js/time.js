export function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const timeString = `${hours}:${minutes}`;

  document.getElementById("time").innerText = timeString;
}

updateTime();
setInterval(updateTime, 1000);
