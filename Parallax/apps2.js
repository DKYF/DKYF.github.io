const see = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("see");
    } else {
      entry.target.classList.remove("see");
    }
  });
});

const seeElements = document.querySelectorAll(".gone");
seeElements.forEach((el) => {
  return see.observe(el);
});
