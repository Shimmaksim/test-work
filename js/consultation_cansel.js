const spam = document.querySelector(".spam");
const cansel = document.querySelector(".close_spam");

const canselMenu = () => {
  spam.classList.toggle("spam--close");
};

cansel.addEventListener("click", () => {
  canselMenu();
});

spam.addEventListener("click", e => {
  if (e.target === spam) canselMenu();
});
