document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Functionality ---
  const menuIcon = document.getElementById('mobile-menu-icon');
  const navLinks = document.querySelector('.nav-links');

  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Change icon to 'X' when menu is open
      if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '&times;';
      } else {
        menuIcon.innerHTML = '&#9776;';
      }
    });
  }

  // --- Scroll Animation Observer ---
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 // Trigger when 15% of the element is visible
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

});
