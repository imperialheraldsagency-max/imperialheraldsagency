// ================== NAVIGATION TOGGLE ==================

// Close nav menu on ESC
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && navLinks.classList.contains('active')) {
navLinks.classList.remove('active');
navToggle.setAttribute('aria-expanded', 'false');
}
});

// ================== HERO FADE-IN ANIMATION ==================
document.addEventListener('DOMContentLoaded', () => {
const heroHeading = document.querySelector('.hero-content h1');
const heroParagraph = document.querySelector('.hero-content p');
const heroCTAs = document.querySelectorAll('.hero-cta a');

if (heroHeading) heroHeading.classList.add('fade-in');
if (heroParagraph) heroParagraph.classList.add('fade-in-delay');
heroCTAs.forEach((btn, i) => {
btn.classList.add("fade-in-cta-${i}");
});
});

// ================== SMOOTH SCROLL ==================
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const target = document.querySelector(link.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});


// ================= DIGITAL EVOLUTION FADE-IN =================
const digitalElements = document.querySelectorAll('.digital-content, .digital-image, .service-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// Apply initial hidden state
digitalElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});


// ================= TESTIMONIAL CAROUSEL =================
const testimonials = document.querySelectorAll('.testimonial-item');
const carousel = document.querySelector('.testimonial-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Show testimonial
function showTestimonial(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Initialize
showTestimonial(currentIndex);

// Next / Prev buttons
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 5000);


// ================= FAQ ACCORDION =================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close others
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    // Toggle current
    item.classList.toggle('active');
  });
});
