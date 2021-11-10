"use strict";

const btnScrollUp = document.querySelector(".btn__scroll");

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

topFunction(btnScrollUp);
