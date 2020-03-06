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


var boschBuyActive = document.querySelector(".bosch__buy--active");

var boschBookmarkActive = document.querySelector(".bosch__bookmark--active");

boschBuyActive.addEventListener("click", function(evt) {
  evt.preventDefault();
});

boschBookmarkActive.addEventListener("click", function(evt) {
  evt.preventDefault();
});

console.log(boschBuyActive);
console.log(boschBookmarkActive);