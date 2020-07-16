$(document).ready(function () {
  var nice = $("body").niceScroll();
});

var cursor = document.querySelector(".cursor");
var cursorSmall = document.querySelector(".cursorSmall");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursorSmall.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});