/* Random background
const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
*/
const body = document.querySelector("body");
const theme1 = document.querySelector(".theme_1");
const theme2 = document.querySelector(".theme_2");
const theme3 = document.querySelector(".theme_3");
const theme4 = document.querySelector(".theme_4");

const basicBG = "1";
const BG_LS = "BackGround";

function removeBackGround() {
  localStorage.removeItem(BG_LS);
}
function saveBackGround(themeNum) {
  localStorage.setItem(BG_LS, themeNum);
}
function paintImage(themeNum) {
  const image = new Image();
  image.src = `images/${themeNum}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
function setBackGround(event) {
  const themeNum = event.target.parentNode.value;
  if (themeNum === undefined) {
    console.log("aaaa");
    themeNum = basicBG;
  }
  paintImage(themeNum);
  removeBackGround();
  saveBackGround(themeNum);
  location.reload();
}
function paintBackground() {
  const bgNum = localStorage.getItem(BG_LS);
  if (bgNum === null) {
    localStorage.setItem(BG_LS, basicBG);
    paintImage(basicBG);
  } else {
    paintImage(bgNum);
  }
}
function init() {
  paintBackground();
  theme1.addEventListener("click", setBackGround);
  theme2.addEventListener("click", setBackGround);
  theme3.addEventListener("click", setBackGround);
  theme4.addEventListener("click", setBackGround);
}
init();
