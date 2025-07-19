document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  if (!carousel) return; // Exit if not on the events page

  const baseAngle = -15; // Initial tilt for a better 3D view
  let angle = 0;
  const totalCards = cards.length;
  const theta = 360 / totalCards;
  // Calculate the radius based on card width to arrange them in a circle
  const radius = Math.round((cards[0].offsetWidth / 2) / Math.tan(Math.PI / totalCards));

  function rotateCarousel() {
    // Add the baseAngle to the dynamic rotation
    carousel.style.transform = `rotateY(${baseAngle + angle}deg)`;

    
    const activeIndex = Math.round(-angle / theta + totalCards) % totalCards;
    cards.forEach((card, index) => {
      card.classList.toggle('active', index === activeIndex);
    });
  }

  function setupCards() {
    cards.forEach((card, index) => {
      const cardAngle = theta * index;
      // Position each card in a circle
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
      
      // Allow clicking on a card to bring it to the front
      card.addEventListener('click', () => {
        angle = -cardAngle;
        rotateCarousel();
      });
    });
    rotateCarousel(); 
  }

  nextBtn.addEventListener("click", () => {
    angle -= theta;
    rotateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    angle += theta;
    rotateCarousel();
  });


  let startX = 0;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = startX - endX;
    const threshold = 50; 
    if (delta > threshold) {
      nextBtn.click(); // Left swipe karne par
    } else if (delta < -threshold) {
      prevBtn.click(); // Right swipe karne par
    }
  }, { passive: true });

  
  setupCards();
});
