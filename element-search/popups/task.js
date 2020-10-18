"use strict";

const modals = Array.from(document.querySelectorAll(".modal")),
  modalMain = document.getElementById("modal_main");

document.addEventListener("DOMContentLoaded", () => {
  modalMain.classList.add("modal_active");
});

modals.forEach((modal) => {
  Array.from(modal.querySelectorAll(".modal__close")).forEach((button) => {
    button.onclick = () => {
      if (button.classList.contains("show-success")) {
        modals[1].classList.add("modal_active");
      }
      modal.classList.remove("modal_active");
    };
  });
});
