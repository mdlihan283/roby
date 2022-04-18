// scroll animation topBar
const topBar = document.getElementById("topBar");

window.onscroll = () => {
  let scroll = scrollY;
  if (scroll > 100) {
    topBar.classList.add("activeBar");
  } else {
    topBar.classList.remove("activeBar");
  }
};

// responsive navigator
const menu = document.querySelector(".menu");
const bars = document.querySelector(".bars");
const close = document.querySelector(".close");

bars.addEventListener("click", () => {
  menu.classList.add("menuActive");
  bars.classList.add("iconHide");
});

close.addEventListener("click", () => {
  menu.classList.remove("menuActive");
  bars.classList.remove("iconHide");
});
