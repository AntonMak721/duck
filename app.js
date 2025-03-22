const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const mainImg = document.querySelector(".main__img");

const buttonPopup = document.getElementById("buttonPopup");
const buttonPopupNavigation = document.getElementById("buttonPopupNavigation");
const overlay = document.getElementById("overlay");

const mobMenu = document.getElementById("mobileMenuHamburger");
const nav = document.getElementById("nav");
const mobileMenuClose = document.getElementById("mobileMenuClose");

buttonPopup.addEventListener("click", function () {
  popup.classList.remove("none");
  overlay.style.display = "flex";
  mainImg.style.zIndex = 0;
});

buttonPopupNavigation.addEventListener("click", function () {
  popup.classList.remove("none");
  overlay.style.display = "flex";
  nav.style.display = "none";
});

popupClose.addEventListener("click", function () {
  popup.classList.toggle("none");
  overlay.style.display = "none";
});
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
  popup.classList.add("none");
  nav.style.display = "none";
});

mobMenu.addEventListener("click", function () {
  nav.style.display = "flex";
  overlay.style.display = "flex";
});

mobileMenuClose.addEventListener("click", function () {
  nav.style.display = "none";
  overlay.style.display = "none";
});
