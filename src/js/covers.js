// const observer = new IntersectionObserver((enteries) => {
    //     enteries.forEach(entery => {
//         if (entery.isIntersecting) {
//             startAnimation();
//         } else {
    //             stopAnimation();
    //         }
    //     })
    // });
    // observer.observe(coverWrapper);
const coverSection = document.querySelector(".covers-section");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
}
const observeFunc = (enteries, observer) => {
    enteries.forEach(entry => {
      if (entry.isIntersecting) {
          startAnimation();
           console.log('Анімація працює');
      } else {
          stopAnimation();
           console.log('Анімація зупинена');
      }
    });
}

function stopAnimation() {
    const slideItem = document.querySelector(".covers-slide");

    slideItem.style.animation = "none";
}
function startAnimation() {
    const slideItem = document.querySelector(".covers-slide");

    slideItem.style.animation = 'slideLine 7s infinite';
}




const observer = new IntersectionObserver(observeFunc, options);
observer.observe(coverSection)

const slideItem = document.querySelector('.covers-slide');
const computedStyles = window.getComputedStyle(slideItem);
const animationName = computedStyles.getPropertyValue('animation-name').trim(); // Отримання ім'я анімації і обрізка пробілів

if (animationName === 'none') {
  console.log('Анімація зупинена');
} else {
  console.log('Анімація працює');
}