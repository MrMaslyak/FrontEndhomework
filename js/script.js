$(".burger").click(function (event) {
  $(this).toggleClass("active");
  $("nav").slideToggle();
});
