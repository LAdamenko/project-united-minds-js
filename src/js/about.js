import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';



import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules';

const buttons = document.querySelectorAll('.btn-about');

const acc = new Accordion('.accordion-container', {
  showMultiple: true,
});

const icons = document.querySelectorAll('.icon-about');

function switcher() {
  icons.forEach((i) => {
    i.classList.toggle('icon-close');
    i.classList.toggle('icon-open');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = document.querySelector('.ac-panel');
      icons.forEach((icon) => {
        if (icon.classList.contains('icon-open')) {
          acc.close(content);
        }
        else {
          acc.open(content);
        }
      })
      switcher();
      console.log('hello');
    });
  });
});








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