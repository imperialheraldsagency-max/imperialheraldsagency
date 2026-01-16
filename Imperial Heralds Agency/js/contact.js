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
const fadeElements = document.querySelectorAll('.contact-hero, .contact-form');

const observerOptions = {
  threshold: 0.2
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // trigger CSS animations
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// ================= FORM VALIDATION & SUBMISSION =================
const contactForm = document.getElementById('contactForm');
const successMessage = contactForm.querySelector('.form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');

    let valid = true;

    // Clear previous error states
    [name, email, message].forEach(input => input.style.borderColor = '#ddd');

    // Validate Name
    if (name.value.trim() === '') {
      name.style.borderColor = 'red';
      valid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email.value.trim())) {
      email.style.borderColor = 'red';
      valid = false;
    }

    // Validate Message
    if (message.value.trim() === '') {
      message.style.borderColor = 'red';
      valid = false;
    }

    if (!valid) {
      return; // Stop submission if invalid
    }

    // -------------------------
    // Submit form via fetch to Formspree
    // -------------------------
    fetch('https://formspree.io/f/mzzypden', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    })
    .then(response => {
      if (response.ok) {
        contactForm.reset();
        successMessage.style.display = 'block';
        // Hide message after 5 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    })
    .catch(error => {
      alert('Oops! There was a problem submitting your form.');
      console.error(error);
    });
  });
}


