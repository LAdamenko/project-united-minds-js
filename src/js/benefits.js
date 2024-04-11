function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  var items = document.querySelectorAll('.benefits-item');
  items.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', function () {
  handleScrollAnimation();
});

document.addEventListener('DOMContentLoaded', function () {
  handleScrollAnimation();
});
