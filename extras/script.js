// window.transitionToPage = function (href) {
//   document.querySelector("E").style.width = "100%";
//   setTimeout(function () {
//     window.location.href = href;
//   }, 500);
// };

// // THIS IS FOR THE PAGES THAT YOU ARE LOADING TO
// document.addEventListener("DOMContentLoaded", function (event) {
//   document.querySelector("body").style.opacity = 1;
// });

function clickE() {
  // Container Stuff
  var C = document.getElementById("container");
  C.classList.remove("unlocked");
  C.style.width = "65%";
  C.style.left = "31.5%";

  // The Main Event
  var E = document.getElementById("E");
  E.classList.remove("unlocked");
  E.style.width = "120%";
  E.style.zIndex = "1000";

  // The Other Letters
  var X = document.getElementById("X");
  X.classList.remove("unlocked");

  var T = document.getElementById("T");
  T.classList.remove("unlocked");

  var R = document.getElementById("R");
  R.classList.remove("unlocked");

  var A = document.getElementById("A");
  A.classList.remove("unlocked");

  var S = document.getElementById("S");
  S.classList.remove("unlocked");

  // The Text
  var text = document.getElementById("text");
  text.style.opacity = "0%";
}
