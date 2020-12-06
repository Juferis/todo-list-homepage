const form = document.querySelector(".js-form"),
  inputName = form.querySelector(".form-input"),
  greeting = document.querySelector(".js-greetings"),
  pen = document.querySelector(".fa-pen");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmitName(event) {
  event.preventDefault();
  const currentValue = inputName.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmitName);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text},`;
  pen.style.display = "inline";
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    pen.style.display = "none";
  } else {
    paintGreeting(currentUser);
  }
}
function reName() {
  localStorage.removeItem(USER_LS);
  pen.style.display = "none";
  greeting.innerText = "";
  loadName();
}
function init() {
  loadName();
  pen.addEventListener("click", reName);
}
init();
