var writeUsOpen = document.querySelector(".contacts__button");

var writeUs = document.querySelector(".write-us");

var writeUsClose = writeUs.querySelector(".write-us__button-close");

var name = writeUs.querySelector(".write-us__name");

writeUsOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUs.classList.add("write-us--open");
});

writeUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUs.classList.remove("write-us--open");
});

console.log(writeUsOpen);
console.log(writeUs);
console.log(writeUsClose);
console.log(name);


var bigMapOpen = document.querySelector(".contacts__pic");

var bigMap = document.querySelector(".big-map");

var bigMapLink = document.querySelector(".big-map__link");

var bigMapClose = bigMap.querySelector(".big-map__button-close");

bigMapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  bigMap.classList.add("big-map--open");
});

bigMapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
})

bigMapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  bigMap.classList.remove("big-map--open");
});

console.log(bigMapOpen);
console.log(bigMap);
console.log(bigMapClose);


var boschBookmark = document.querySelectorAll(".bosch__bookmark");

var popupCart = document.querySelector(".popup-cart");

/*var popupCartClose = popupCart.querySelector(".poput-cart__button-close");

boschBookmark.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupCart.classList.add("popup-cart--open");
});

popupCartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupCart.classList.remove("popup-cart--open");
});*/

console.log(boschBookmark);
console.log(popupCart);
//console.log(popupCartClose);