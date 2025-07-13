// JS/carousel-touch.js
let startX = 0;
let endX = 0;

const carousel = document.querySelector('.carousel');

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const delta = startX - endX;
  const threshold = 50;
  if (delta > threshold) {
    document.getElementById('next').click(); 
  } else if (delta < -threshold) {
    document.getElementById('prev').click(); 
  }
}
