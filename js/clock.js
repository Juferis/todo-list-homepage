const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title"),
  clockDay = document.querySelector(".js-day"),
  welcome = document.querySelector(".welcome"),
  second = clockContainer.querySelector(".js-second"),
  amOrPm = clockContainer.querySelector(".js-am_or_pm");
const week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function paintClockDay(year, month, day, todayWeek) {
  clockDay.innerText = `${year}년 ${month < 10 ? `0${month}` : month}월 ${
    day < 10 ? `0${day}` : day
  }일 ${todayWeek}`;
}
function paintAmOrPm(hours) {
  if (0 <= hours && hours < 13) {
    amOrPm.innerText = "AM";
  } else {
    amOrPm.innerText = "PM";
  }
}
function paintYYYYMMDD(hours) {
  if (11 >= hours && hours >= 6) {
    welcome.innerText = "Good Morning!";
  } else if (17 >= hours && hours >= 12) {
    welcome.innerText = "Good Afternoon!";
  } else if (22 >= hours && hours >= 18) {
    welcome.innerText = "Good Evening!";
  } else {
    welcome.innerText = "Good Night!";
  }
}
function paintTime(hours, minutes) {
  if (hours > 13 && hours <= 24) {
    const nowhours = hours - 12;
    clockTitle.innerText = `${nowhours < 10 ? `0${nowhours}` : nowhours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  } else if (hours === 0) {
    const nowhours = hours + 12;
    clockTitle.innerText = `${nowhours < 10 ? `0${nowhours}` : nowhours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  } else {
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  }
}
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const getWeek = date.getDay();
  const todayWeek = week[getWeek];
  setInterval(paintTime(hours, minutes), 60 * 60 * 1000);
  second.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;

  setInterval(paintYYYYMMDD(hours), 24 * 60 * 60 * 1000);
  setInterval(paintAmOrPm(hours), 60 * 60 * 1000);
  setInterval(paintClockDay(year, month, day, todayWeek), 24 * 60 * 60 * 1000);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
