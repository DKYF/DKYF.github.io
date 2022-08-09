// SLIDER FOR DEALS

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

// SLIDER FOR DEALS

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
