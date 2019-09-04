const consultetion = document.querySelector(".consultetion");
const spam = document.querySelector(".spam");

const toggleMenu = () => {
  spam.classList.toggle("spam--open");
};

consultetion.addEventListener("click", () => {
  toggleMenu();
});

spam.addEventListener("click", e => {
  if (e.target === spam) toggleMenu();
});
