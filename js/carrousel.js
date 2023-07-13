const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = document.querySelector('.slide').offsetWidth;

let position = 0;

prevButton.addEventListener('click', () => {
  position += slideWidth;
  carousel.style.transform = `translateX(${position}px)`;
});

nextButton.addEventListener('click', () => {
  position -= slideWidth;
  carousel.style.transform = `translateX(${position}px)`;
});