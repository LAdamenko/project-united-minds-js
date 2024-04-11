import Swiper from 'swiper';

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
import 'swiper/css';


const notFoundMessage = document.querySelector('.not-found');
const reviewsList = document.querySelector(`.reviews-list`);
const swiperBlock = document.querySelector(`.swiper`)    

function displayToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 4,
            },
            navigation: {
                nextEl: '.next-button',
                prevEl: '.prev-button',
            },
        }
    });
    
function render(data) {
  if (data.hits.length === 0) {
      displayToast("Sorry, there are no images matching your search query. Please try again!");
      swiperHide();
      notFoundShow()
  }
  else {
    const reviews = data.hits;

      const markup = reviews.map(review => `<li class="reviews-item">
                <img src="" alt="" width="48" height="48"  class="reviews-avatar"/>
                <div class="reviews-info">
                    <h3 class="reviews-name"></h3>
                    <p class="reviews-text"></p>
                </div>
              </li>`)
      .join('');
    reviewsList.insertAdjacentHTML('beforeend', markup);
  }
}
});

function swiperHide(){
swiperBlock.style.display = 'none';
}

function notFoundShow() {
    notFoundMessage.style.display = 'block'
}