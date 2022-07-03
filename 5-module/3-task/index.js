function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let carouselInner = carousel.querySelector('.carousel__inner');
  let arrOfSlides = Array.from(carouselInner.children);
  let carouselSlide = carousel.querySelector('.carousel__slide');
  let carouselSlideWidth = carouselSlide.offsetWidth;
  let arrowRight = carousel.querySelector('.carousel__arrow_right');
  let arrowLeft = carousel.querySelector('.carousel__arrow_left');
  let slideIndex = 0;
  let maxSlides = 3;

  arrowLeft.style.display = 'none';
  arrowRight.addEventListener('click', () => {
    arrowLeft.style.display = '';
    arrOfSlides[slideIndex++];
    carouselInner.style.transform = `translateX(-${carouselSlideWidth * slideIndex}px)`;
    if (slideIndex > (maxSlides - 1)) {
      arrowRight.style.display = 'none';
    }
  });

  arrowLeft.addEventListener('click', () => {
    arrOfSlides[slideIndex--];
    carouselInner.style.transform = `translateX(-${carouselSlideWidth * slideIndex}px)`;
    if (slideIndex === 0) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = '';
    }
  });
}
