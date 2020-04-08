if ("NodeList" in window && !NodeList.prototype.forEach) {
  console.info("polyfill for IE11");
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var images = document.querySelectorAll("img");
images.forEach(function(el) {
  el.ondragstart = function() {
    return false;
  };
});

var container = document.querySelector(".container");
var secreen1 = document.querySelector(".screen-1");
var secreen2 = document.querySelector(".screen-2");
var secreen3 = document.querySelector(".screen-3");
var btn1 = document.querySelector('[data-ja="sow-screen2"]');
var wrapper = document.querySelector(".screen-2__wrapper");
var wrapperBottom = document.querySelector(".screen-2__wrapper-bottom");
var isSecScreenActive = false;
var isThreedScreenActive = false;
var isMouseDown = false;

function addClass(el, className) {
  document.querySelector(el).classList.add(className);
}

function removeClass(el, className) {
  document.querySelector(el).classList.add(className);
}

function sowSecScreen() {
  secreen1.classList.remove("active");
  secreen2.classList.add("active");
}

function showThridScreen() {
  secreen2.classList.remove("active");
  secreen3.classList.add("active");
}

function animateThridScreen() {
  setTimeout(function() {
    addClass(".creen-3__cake--main", "bounceInUp");
  }, 100);
  setTimeout(function() {
    addClass(".creen-3__cake--1", "bounceInDown");
  }, 300);
  setTimeout(function() {
    addClass(".creen-3__cake--3", "bounceInLeft");
  }, 600);
  setTimeout(function() {
    addClass(".creen-3__cake--2", "bounceInRight");
  }, 900);

  setTimeout(function() {
    addClass(".screen-3__text--1", "rotate-in-center");
  }, 1800);
  setTimeout(function() {
    addClass(".screen-3__text--1", "fade-out");
  }, 3200);
  setTimeout(function() {
    addClass(".screen-3__text--2", "bounceIn");
  }, 3800);
}

function changeWrapper() {
  addClass(".screen-2__old-wrapper", "hide");
  addClass(".screen-2__wrappers-wrapper", "down");
  addClass(".screen-2__wrapper-top", "down");
  addClass(".screen-2__cursor", "hide");
  setTimeout(function() {
    addClass(".screen-2__wrappers", "bounceOutDown");
  }, 600);
}

function start() {
  addClass(".container", "active");
  addClass(".screen-1", "active");

  addClass(".screen-1__text", "zoomIn");

  setTimeout(function() {
    addClass(".screen-1__question--1", "bounceIn");
  }, 500);

  setTimeout(function() {
    addClass(".screen-1__question--2", "bounceIn");
  }, 700);

  setTimeout(function() {
    addClass(".screen-1__question--3", "bounceIn");
  }, 900);

  setTimeout(function() {
    addClass(".screen-1__button", "animated");
  }, 1400);
  setTimeout(function() {
    addClass(".screen-1__button", "scale");
  }, 3400);

  btn1.addEventListener("click", function() {
    if (!isSecScreenActive) {
      sowSecScreen();
      isSecScreenActive = true;
      serTimeout(function() {
        addClass(".screen-2__cursor", "dragWrapper");
      }, 500);
    }
  });

  secreen2.addEventListener("touchstart", function() {
    if (isSecScreenActive) {
      changeWrapper();

      setTimeout(function() {
        showThridScreen();
        animateThridScreen();
      }, 1300);
    }
  });

  secreen2.addEventListener("mousedown", function() {
    if (isSecScreenActive) {
      changeWrapper();

      setTimeout(function() {
        showThridScreen();
        animateThridScreen();
      }, 1300);
    }
  });
}

window.addEventListener("load", function() {
  start();
});
