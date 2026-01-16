// ================= HAMBURGER MENU =================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// ================= SMOOTH SCROLL =================
const navAnchors = document.querySelectorAll('.nav-links a');

navAnchors.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});

// ================= SCROLL-TRIGGERED ANIMATIONS =================
const serviceItems = document.querySelectorAll('.service-item');

const observerOptions = {
  threshold: 0.2
};

const serviceObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // trigger CSS animations
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

serviceItems.forEach(item => serviceObserver.observe(item));

// ================= SERVICE CARDS HOVER ANIMATION =================
serviceItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-10px) scale(1.03)';
    item.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    item.style.transition = 'all 0.4s ease';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0) scale(1)';
    item.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
  });
});