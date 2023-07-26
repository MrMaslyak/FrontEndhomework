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

    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },

      1150: {
        items: 3,
      },
    },
  });
  $(".slider-with-tochka").owlCarousel({
    items: 3,
    rtl: true,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 3,
      },
    },
  });
});
$(".burger").click(function (event) {
  $(this).toggleClass("active");
  $("nav").slideToggle();
});
