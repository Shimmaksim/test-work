const object = document.querySelector(".object");
const cansel = document.querySelector(".button_object_cansel");

const canselMenu = () => {
  object.classList.toggle("object--cansel");
};

cansel.addEventListener("click", () => {
  canselMenu();
});

object.addEventListener("click", e => {
  if (e.target === object) canselMenu();
});
