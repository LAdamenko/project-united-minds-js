import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules';

const buttons = document.querySelectorAll('.btn-about');

const acc = new Accordion('.accordion-container', {
  showMultiple: true,
  collapse: true,
});

// const icon = document.querySelector('.icon-about');

// function switcher() {
//   icon.classList.toggle('.icon-close');
//   icon.classList.toggle('.icon-open');
//   console.log('hello');
// }

document.addEventListener("DOMContentLoaded", () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      acc.open();
      console.log('hello');
    });
  });
}


// const acc = new Accordion('.accordion-container', {
//   showMultiple: true,
// });

// const accordionItems = document.querySelectorAll('.ac');


// document.addEventListener("DOMContentLoaded", () => {
//   accordionItems.forEach(item => {
//     const header = item.querySelector('.ac-header');
//     const button = item.querySelectorAll('.btn-about');
//     const content = item.querySelector('.ac-panel');

//     header.addEventListener('click', () => {
//       if (content.classList.contains('text-cv-about-container')) {
//         accordion.close(content);
//       } else {
//         button.click();
//       }
//     });
//   });
// });







const swiper = new Swiper('.swiper-about', {
  modules: [Keyboard, Mousewheel],
  speed: 400,
  spaceBetween: 0,
  allowTouchMove: true,
  loop: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
  },
  slidesPerView: 2,
  breakpoints: {
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