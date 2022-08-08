///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

// const Introduction = document.querySelector(".introduction");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(Introduction);

///////////////////////////////////////////////////////////
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

// SLIDER

let slides = document.getElementsByClassName("slider__slide");
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
  slides[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

// SLIDES
