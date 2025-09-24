const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const Second = (getSecond / 60) * 360;
  const Minute = (getMinute / 60) * 360;
  const Hour = (getHour / 12) * 360;

  second.style.transform = `rotate(${Second}deg)`;
  minute.style.transform = `rotate(${Minute}deg)`;
  hour.style.transform = `rotate(${Hour}deg)`;
}
setInterval(setDate, 1000);
setDate();
