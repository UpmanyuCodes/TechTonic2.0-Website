const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let angle = 0;
let current = 0;
const total = cards.length;

function updateCarousel() {
  cards.forEach((card, index) => {
    const rotation = 360 / total * (index - current);
    card.style.transform = `rotateY(${rotation}deg) translateZ(350px)`;
    card.classList.toggle("active", index === current);
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + total) % total;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % total;
  updateCarousel();
});

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    current = index;
    updateCarousel();
  });
});

updateCarousel();