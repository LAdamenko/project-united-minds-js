import Swiper from 'swiper';
const elements = {
  buttonPrev: document.querySelector('.swiper-button-prev'),
  buttonNext: document.querySelector('swiper-button-next'),
};
const swiper = new Swiper('.swiper', {
  navigation: {
    prevEl: elements.buttonPrev,
    nextEl: elements.buttonNext,
  },
});
swiper.slideNext();
