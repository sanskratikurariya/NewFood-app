
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let slideInterval;


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "fade-scale-in");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active", "fade-scale-in");
  dots[index].classList.add("active");
}


nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  resetInterval();
});


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetInterval();
  });
});


function startInterval() {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 2000);
}

function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}


showSlide(currentSlide);
startInterval();

const sections = ['home', 'about', 'menu'];
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    const offsetTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
      document.querySelectorAll('.nav-item').forEach((nav) => {
        nav.classList.remove('active');
      });

      const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});



const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navLinks.classList.toggle("open");
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 769) {
      menuIcon.classList.remove("active");
      navLinks.classList.remove("open");
    }
  });
});
