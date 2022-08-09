// SLIDER FOR DEALS (NORMAL)

let slides = document.getElementsByClassName("deals-info");
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

// SLIDER FOR DEALS (PHONE VIEW)

let smallslides = document.getElementsByClassName("deals-info_2");
let currentsmallSlide = 0;

document.getElementById("nav-button--next_2").addEventListener("click", () => {
  changesmallSlide(currentsmallSlide + 1);
});
document.getElementById("nav-button--prev_2").addEventListener("click", () => {
  changesmallSlide(currentsmallSlide - 1);
});

function changesmallSlide(moveTo) {
  if (moveTo >= smallslides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = smallslides.length - 1;
  }

  smallslides[currentsmallSlide].classList.toggle("active");
  smallslides[moveTo].classList.toggle("active");

  currentsmallSlide = moveTo;
}

// SLIDER FOR CUSTOMER

let customer = document.getElementsByClassName("testimonials-info");
let currentcustomer = 0;

document.getElementById("cust-button--next").addEventListener("click", () => {
  changeCustomer(currentcustomer + 1);
});
document.getElementById("cust-button--prev").addEventListener("click", () => {
  changeCustomer(currentcustomer - 1);
});

function changeCustomer(moveTo) {
  if (moveTo >= customer.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = customer.length - 1;
  }

  customer[currentcustomer].classList.toggle("active");
  customer[moveTo].classList.toggle("active");

  currentcustomer = moveTo;
}

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

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
