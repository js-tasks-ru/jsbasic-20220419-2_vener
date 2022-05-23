function initCarousel() {
  let slides = document.querySelector('.carousel__inner');
  let leftCarouselArrow = document.querySelector('.carousel__arrow_left');
  let rightCarouselArrow = document.querySelector('.carousel__arrow_right');
  let offsetWidth = document.querySelector('.carousel__slide').offsetWidth;


  leftCarouselArrow.style.display = 'none';
  slides.setAttribute('data-counter', '0');

  rightCarouselArrow .addEventListener('click', (event) => {
    let countTranslate = offsetWidth * (+slides.dataset.counter + 1);

    leftCarouselArrow.style.display = '';

    slides.style.transform = `translateX(-${countTranslate}px)`;
    slides.dataset.counter++;
    
    if (slides.childElementCount === (+slides.dataset.counter + 1)) {
      rightCarouselArrow.style.display = 'none';
    }
  }) ;


  leftCarouselArrow.addEventListener('click', (event) => {
    let countTranslate = offsetWidth * (+slides.dataset.counter - 1);

    rightCarouselArrow.style.display = '';

    slides.style.transform = `translateX(-${countTranslate}px)`;
    slides.dataset.counter--;

    if (+slides.dataset.counter === 0) {
      leftCarouselArrow.style.display = 'none';
    }
  }) ;
}

