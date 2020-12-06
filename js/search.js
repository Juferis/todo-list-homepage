const searchNaver = document.querySelector("#search-naver");
const searchGoogle = document.querySelector("#search-google");

function handleGoogle(event) {
  const getText = event.target.value;
  const keyWord = getText;
  location.href = `https://www.google.com/search?&q=${keyWord}`;
}
function handleNaver(event) {
  const getText = event.target.value;
  const keyWord = getText;
  location.href = `https://search.naver.com/search.naver?query=${keyWord}`;
}

function init() {
  searchNaver.addEventListener("search", handleNaver);
  searchGoogle.addEventListener("search", handleGoogle);
}
init();
