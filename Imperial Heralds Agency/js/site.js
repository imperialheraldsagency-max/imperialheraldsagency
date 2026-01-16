/* =========================================================
   IMPERIAL HERALDS AGENCY | SITE.JS
   Handles: Preloader, Scroll Animations, Parallax, Navbar
   ========================================================= */

/* --------------- PRELOADER HANDLER --------------- */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => preloader.style.display = "none", 600);
  }
});

/* --------------- NAVBAR SCROLL BEHAVIOR --------------- */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* --------------- MOBILE MENU TOGGLE --------------- */
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

/* --------------- SMOOTH SCROLLING --------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector(".nav-links").classList.remove("active");
    }
  });
});

/* --------------- SCROLL-TRIGGERED ANIMATIONS --------------- */
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll(".fade-up, .reveal-left, .scale-in").forEach(el => observer.observe(el));

/* --------------- PARALLAX EFFECT --------------- */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(el => {
    const speed = 0.4; // Adjust depth movement
    const offset = window.pageYOffset * speed;
    el.style.backgroundPositionY = `${offset}px`;
  });
});

/* --------------- MICRO-INTERACTIONS --------------- */
document.querySelectorAll(".cta-btn, button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  });
});

/* --------------- BACK TO TOP BUTTON (Optional) --------------- */
const backToTop = document.createElement("div");
backToTop.id = "backToTop";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

Object.assign(backToTop.style, {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  background: "#d4af37",
  color: "#fff",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  textAlign: "center",
  lineHeight: "45px",
  cursor: "pointer",
  fontSize: "1.2rem",
  display: "none",
  transition: "all 0.4s ease",
  zIndex: "999"
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
