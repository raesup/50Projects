const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    e.target.innerHTML = "Light Mode";
  } else {
    e.target.innerHTML = "Dark Mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourNeedle.style.transform = `translate(-50%, -100%) rotate(${
    hoursForClock * 30
  }deg)`;

  minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${
    minutes * 6
  }deg)`;

  secondNeedle.style.transform = `translate(-50%, -100%) rotate(${
    seconds * 6
  }deg)`;

  timeEL.textContent = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setInterval(setTime, 1000);
