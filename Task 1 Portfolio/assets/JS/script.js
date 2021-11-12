"use strict";

const btnScrollUp = document.querySelector(".btn__scroll");

function topFunction() {
  document.documentElement.scrollTop = 0;
}

topFunction(btnScrollUp);

// Sticky nav bar
window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
