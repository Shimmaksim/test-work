"use strict";
const purpop = document.querySelector(".purpop");
const object = document.querySelector(".object");

const toggleMenu = () => {
  object.classList.toggle("object--active");
};

purpop.addEventListener("click", () => {
  toggleMenu();
});

object.addEventListener("click", e => {
  if (e.target === object) toggleMenu();
});
