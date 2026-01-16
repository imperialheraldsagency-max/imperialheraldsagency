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
const fadeElements = document.querySelectorAll('.refer-steps, .referral-card, .referral-stats');

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

// ================= COPY REFERRAL LINK =================
const copyBtn = document.querySelector('#copyReferralBtn');
const referralInput = document.querySelector('#referralLink');

if (copyBtn && referralInput) {
  copyBtn.addEventListener('click', () => {
    referralInput.select();
    referralInput.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(referralInput.value).then(() => {
      copyBtn.textContent = 'Copied!';
      copyBtn.style.backgroundColor = '#000';
      copyBtn.style.color = '#fff';
      setTimeout(() => {
        copyBtn.textContent = 'Copy Link';
        copyBtn.style.backgroundColor = '#d4af37';
        copyBtn.style.color = '#fff';
      }, 2000);
    }).catch(err => {
      alert('Failed to copy link, try manually.');
      console.error(err);
    });
  });
}

// ================= REFERRAL CARD HOVER ANIMATION =================
const referralCards = document.querySelectorAll('.referral-card');

referralCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    card.style.transition = 'all 0.4s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
  });
});


