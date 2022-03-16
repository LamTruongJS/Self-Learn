///clock

function printClock() {
  const now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hour.toString().padStart(2, 0);
  minutes.toString().padStart(2, 0);
  seconds.toString().padStart(2, 0);
  console.log(hour, ':', minutes, ':', seconds);
}
const intervalID = setInterval(printClock, 1000);
intervalID();
clearInterval(intervalID);
