const colorBtn1 = document.querySelector(".color-btn1");
const colorBtn2 = document.querySelector(".color-btn2");
const colorBtn3 = document.querySelector(".color-btn3");
const colorBtn4 = document.querySelector(".color-btn4");

const clockColor = document.querySelector(".clock");
const greetingBoxColor = document.querySelector(".greeting-box");
const jsDayColor = document.querySelector(".js-day");
const showingColor = document.querySelector(".showing");
const toDoListColor = document.querySelector(".toDoList");
const toDoFormColor = document.querySelector(".toDoForm");
const toDoFormInputColor = toDoFormColor.querySelector("input");
const weatherColor = document.querySelector(".weather");
const menuBoxColor = document.querySelector(".menu-box");
const formColor = document.querySelector(".form");
const formInputColor = formColor.querySelector("input");
const menuBoxIcon1 = document.querySelector(".theme_1");
const menuBoxIcon2 = document.querySelector(".theme_2");
const menuBoxIcon3 = document.querySelector(".theme_3");
const menuBoxIcon4 = document.querySelector(".theme_4");

const COLOR_LS = "color";
function removeColor() {
  localStorage.removeItem(COLOR_LS);
}
function loadColor() {
  localStorage.getItem(COLOR_LS);
  if (COLOR_LS === null) {
    const basicColor = "white";
    localStorage.setItem(COLOR_LS, basicColor);
    paintColor(basicColor);
  } else {
    const color = localStorage.getItem(COLOR_LS);
    paintColor(color);
  }
}
function paintColor(color) {
  clockColor.style.color = color;
  greetingBoxColor.style.color = color;
  jsDayColor.style.color = color;
  showingColor.style.color = color;
  toDoListColor.style.color = color;
  toDoFormInputColor.style.borderBottomColor = color;
  formInputColor.style.borderBottomColor = color;
  weatherColor.style.color = color;
  menuBoxColor.style.color = color;
  menuBoxIcon1.style.color = color;
  menuBoxIcon2.style.color = color;
  menuBoxIcon3.style.color = color;
  menuBoxIcon4.style.color = color;
}
function changeColor(event) {
  const btnNum = event.target.value;
  if (btnNum === "1") {
    const color = "white";
    removeColor();
    localStorage.setItem(COLOR_LS, color);
    paintColor(color);
  } else if (btnNum === "2") {
    removeColor();
    const color = "black";
    localStorage.setItem(COLOR_LS, color);
    paintColor(color);
  } else if (btnNum === "3") {
    removeColor();
    const color = "#fd79a8";
    localStorage.setItem(COLOR_LS, color);
    paintColor(color);
  } else {
    removeColor();
    const color = "#3498db";
    localStorage.setItem(COLOR_LS, color);
    paintColor(color);
  }
}
function init() {
  loadColor();
  colorBtn1.addEventListener("click", changeColor);
  colorBtn2.addEventListener("click", changeColor);
  colorBtn3.addEventListener("click", changeColor);
  colorBtn4.addEventListener("click", changeColor);
}
init();
