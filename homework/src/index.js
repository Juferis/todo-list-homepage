// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const showDDay = document.querySelector(".js-Dday");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const nowDay = new Date();
  const dDay = xmasDay.getTime() - nowDay.getTime();
  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dDay / (1000 * 60 * 60)) % 24),
    miuntes = Math.floor((dDay / (1000 * 60)) % 60),
    seconds = Math.floor((dDay / 1000) % 60);
  showDDay.innerText = `${day < 10 ? `0${day}` : day}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${miuntes < 10 ? `0${miuntes}` : miuntes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
