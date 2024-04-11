import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules';

// const buttons = document.querySelectorAll('.btn-about');

// const acc = new Accordion('.accordion-container', {
//   showMultiple: true,
//   collapse: true,
// });

// const icon = document.querySelector('.icon-about');

// function switcher() {
//   icon.classList.toggle('.icon-close');
//   icon.classList.toggle('.icon-open');
//   console.log('hello');
// }


// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     acc.open();
//     switcher();
//   });
// });

// buttons.forEach(function (button) {
//   button.addEventListener("click", () => {
//     console.log('hello');
//   });
// })


// const swiper = new Swiper('.swiper', {
//   modules: [Keyboard, Mousewheel],
//   speed: 400,
//   spaceBetween: 0,
//   allowTouchMove: true,
//   loop: true,
//   slideToClickedSlide: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   mousewheel: {
//     enabled: true,
//   },
//   slidesPerView: 'auto',
//   breakpoints: {
//     375: {
//       slidesPerView: 2
//     },
//     768: {
//       slidesPerView: 3
//     },
//     1440: {
//       slidesPerView: 6
//     }
//   }
// });

// const swipeBtn = document.querySelector('.btn-arrow');

// swipeBtn.addEventListener("click", () => {
//   swiper.slideNext();
//   swiper.updateSize();
//   swiper.updateSlides();
// });