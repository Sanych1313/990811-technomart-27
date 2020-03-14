var bigMapOpen = document.querySelector(".contacts__pic");
if (bigMapOpen) {

  var bigMap = document.querySelector(".big-map");

  var bigMapLink = document.querySelector(".big-map__link");

  var bigMapButtonClose = bigMap.querySelector(".big-map__button-close");

  var openBigMap = function(evt) {
    evt.preventDefault();
    bigMap.classList.add("big-map--open");
  };

  var closeBigMap = function(evt) {
    evt.preventDefault();
    bigMap.classList.remove("big-map--open");
  };

  bigMapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
  });

  bigMapOpen.addEventListener("click", openBigMap);
  bigMapButtonClose.addEventListener("click", closeBigMap)
};


var contactsButton = document.querySelector(".contacts__button");
if (contactsButton) {

  var writeUs = document.querySelector(".write-us");

  var writeUsButton = writeUs.querySelector(".write-us__button")

  var writeUsButtonClose = writeUs.querySelector(".write-us__button-close");

  var openWriteUs = function(evt) {
    evt.preventDefault();
    writeUs.classList.add("write-us--open");
  };

  var closeWriteUs = function(evt) {
    evt.preventDefault();
    writeUs.classList.remove("write-us--open");
  };

  writeUsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
  });

  contactsButton.addEventListener("click", openWriteUs);
  writeUsButtonClose.addEventListener("click", closeWriteUs);
};


var drillBuys = document.querySelectorAll(".drill__buy");
if (drillBuys) {
  var popupCart = document.querySelector(".popup-cart");

  var openPopupCart = function(evt) {
    evt.preventDefault();
    popupCart.classList.add("popup-cart--open");
    popupCart.querySelector(".poput-cart__button-close").addEventListener("click", closePopupCart);
  };

  var closePopupCart = function(evt) {
    evt.preventDefault();
    popupCart.classList.remove("popup-cart--open");
  };

  drillBuys.forEach(function(item) {
    item.addEventListener("click", openPopupCart);
  });
};