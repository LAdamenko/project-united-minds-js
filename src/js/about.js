import Accordion from 'accordion-js';

import Swiper from 'swiper';

import 'swiper/css';

import { Keyboard, Mousewheel } from 'swiper/modules';



const buttons = document.querySelectorAll('.btn-about');

const accordionItems = document.querySelectorAll('.ac');


document.addEventListener("DOMContentLoaded", () => {
  const acc = new Accordion('.accordion-container', {
    showMultiple: true,
    openOnInit: [0],
  });
  accordionItems.forEach(item => {
    const header = item.querySelector('.ac-header');
    const panel = item.querySelector('.ac-panel');

    header.addEventListener('click', () => {
      const isActive = panel.classList.contains('active');
      if (isActive) {
        acc.close(panel);
      } else {
        acc.open(panel);
      }
    });
  });
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const icon = event.currentTarget.querySelector('.icon-about');
      icon.classList.toggle('icon-close');
      icon.classList.toggle('icon-open');
    });
  });

});


document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper-about', {
    modules: [Keyboard, Mousewheel],
    cssMode: true,
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
    width: 260,
    breakpoints: {
      768: {
        slidesPerView: 3,
        width: 600
      },
      1440: {
        slidesPerView: 6,
        width: 1200
      }
    }
  });

  const swipeBtn = document.querySelector('.btn-arrow');

  swipeBtn.addEventListener("click", () => {
    swiper.slideNext();
    swiper.updateSize();
    swiper.updateSlides();
  });

  swipeBtn.addEventListener("keydown", (e) => {
    if (e.key === 'Tab') {
      swiper.slideNext();
      swiper.updateSize();
      swiper.updateSlides();
    }
  });
})
