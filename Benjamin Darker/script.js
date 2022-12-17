// NAVIGATION ARROWS

let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

document.querySelectorAll(".slider__navlink").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});

// WEDDING SLIDER

let slides2 = document.getElementsByClassName("wedding-slide");
let weddinglinks2 = document.getElementsByClassName("slider__weddinglink");
let currentSlide2 = 0;

document
  .getElementById("wedding-button--next")
  .addEventListener("click", () => {
    changeSlide2(currentSlide2 + 1);
  });
document
  .getElementById("wedding-button--prev")
  .addEventListener("click", () => {
    changeSlide2(currentSlide2 - 1);
  });

function changeSlide2(moveTo) {
  if (moveTo >= slides2.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides2.length - 1;
  }

  slides2[currentSlide2].classList.toggle("active");
  weddinglinks2[currentSlide2].classList.toggle("active");
  slides2[moveTo].classList.toggle("active");
  weddinglinks2[moveTo].classList.toggle("active");

  currentSlide2 = moveTo;
}

document.querySelectorAll(".slider__catlink").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide2 !== bulletIndex) {
      changeSlide2(bulletIndex);
    }
  });
});

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header_main");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
