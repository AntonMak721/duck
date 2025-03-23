const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const mainImg = document.getElementById("mainImg");

const buttonPopup = document.getElementById("buttonPopup");
const buttonPopupNavigation = document.getElementById("buttonPopupNavigation");
const overlay = document.getElementById("overlay");

const mobMenu = document.getElementById("mobileMenuHamburger");
const nav = document.getElementById("nav");
const mobileMenuClose = document.getElementById("mobileMenuClose");

buttonPopup.addEventListener("click", function () {
  popup.classList.remove("none");
  overlay.classList.add("flex");
  mainImg.classList.add("zIndex");
});

buttonPopupNavigation.addEventListener("click", function () {
  popup.classList.remove("none");
  overlay.classList.add("flex");
  nav.classList.remove("flex");
});

popupClose.addEventListener("click", function () {
  popup.classList.add("none");
  overlay.classList.remove("flex");
  mainImg.classList.remove("zIndex");
});
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.classList.remove("flex");
  }
  popup.classList.add("none");
  mainImg.classList.remove("zIndex");

  if (window.innerWidth < 1198) {
    nav.classList.remove("flex");
  }
});

mobMenu.addEventListener("click", function () {
  nav.classList.add("flex");
  overlay.classList.add("flex");
});

mobileMenuClose.addEventListener("click", function () {
  nav.classList.remove("flex");
  overlay.classList.remove("flex");
});
