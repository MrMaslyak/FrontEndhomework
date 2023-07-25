$(document).ready(function () {
  $(".slider-with-tochka").owlCarousel({
    items: 3,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var formContainer = document.getElementById("formContainer");
  var getStartedLink = document.getElementById("getStartedLink");
  var close = document.getElementById("close");

  getStartedLink.addEventListener("click", function (event) {
    event.preventDefault();
    formContainer.style.display = "flex";
    formContainer.classList.add("active");
  });

  close.addEventListener("click", function () {
    formContainer.style.display = "none";
    formContainer.classList.remove("active");
  });
});
$(document).ready(function () {
  $(".slider-with-arrows").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    navText: ["<img src=./img/arrow-1.png>", "<img src=./img/arrow-2.png>"],
  });
});
