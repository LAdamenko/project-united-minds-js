import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';

const buttons = document.querySelectorAll('.btn-about');

const first = document.querySelector('.accordion-first');
const second = document.querySelector('.accordion-second');
const third = document.querySelector('.accordion-third');

const acc = new Accordion(first, second, third, {
  openOnInit: first,
  showMultiple: true,
  collapse: true,
});


buttons.forEach((button) => {
  button.addEventListener("click", () => acc.open());
});

// buttons.forEach(function (button) {
//   button.addEventListener("click", () => {
//     console.log('hello');
//   });
// })


const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 0,
  allowTouchMove: true,
  loop: true,
  slideToClickedSlide: true,
  keyboard: true,
  slidesPerView: 'auto',
  breakpoints: {
    375: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 6
    }
  }


});

const swipeBtn = document.querySelector('.btn-arrow');

swipeBtn.addEventListener("click", () => {
  swiper.slideNext();
  swiper.updateSize();
  swiper.updateSlides();
});