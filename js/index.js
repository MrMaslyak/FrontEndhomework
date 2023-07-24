let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const cards = document.getElementsByClassName("card-1");
  const dots = document.getElementsByClassName("dot");

  if (n > cards.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = cards.length;
  }

  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  let startIndex = slideIndex - 1;
  let endIndex = startIndex + 3;
  if (endIndex > cards.length) {
    endIndex = cards.length;
    startIndex = endIndex - 3;
  }

  for (i = startIndex; i < endIndex; i++) {
    cards[i].style.display = "block";
  }

  dots[startIndex].classList.add("active");
  dots[startIndex + 1].classList.add("active");
  dots[startIndex + 2].classList.add("active");
}
