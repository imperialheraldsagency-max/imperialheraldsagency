/* ================= HAMBURGER MENU TOGGLE ================= */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}

/* Optional: Close menu when a link is clicked */
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

/* ================= SMOOTH SCROLLING ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ================= OPTIONAL MICRO-INTERACTIONS ================= */
/* Fade in sections on scroll */
const fadeElements = document.querySelectorAll('.about-section, .value-item');

const fadeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => fadeObserver.observe(el));


// About hero fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".about-hero .hero-content");

  function handleScroll() {
    const rect = heroContent.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      heroContent.classList.add("visible");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load if already in view
});

