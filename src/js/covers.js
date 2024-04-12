
const coverSection = document.querySelector(".covers-section");
const options = {
    root: null,
    rootMargin: "270px",
    threshold: 0.5,
}
const observeFunc = (enteries) => {
    enteries.forEach(entry => {
      if (entry.isIntersecting) {
          startAnimation();
      } else {
          stopAnimation();
      }
    });
}

function stopAnimation() {
    const slideItem = document.querySelectorAll(".covers-slide");
    slideItem.forEach((slide) => slide.classList.remove("animation"))
}
function startAnimation() {
    const slideItem = document.querySelectorAll(".covers-slide");
    slideItem.forEach((slide) => slide.classList.add("animation"));
    
}




const observer = new IntersectionObserver(observeFunc, options);
observer.observe(coverSection)

