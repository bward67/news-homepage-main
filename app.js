const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const links = document.querySelector(".links");
const container = document.querySelector(".container");

hamburgerIcon.addEventListener("click", () => {
  links.classList.add("active");
  closeIcon.classList.add("active");
  container.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  closeIcon.classList.remove("active");
  container.classList.remove("active");
  hamburgerIcon.classList.add("active");
  links.classList.remove("active");
});
