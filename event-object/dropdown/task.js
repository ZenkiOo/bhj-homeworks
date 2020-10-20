"use strict";

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("dropdown__value")) {
    target
      .closest(".dropdown")
      .querySelector(".dropdown__list")
      .classList.add("dropdown__list_active");
  }
  if (target.classList.contains("dropdown__link")) {
    event.preventDefault();
    target.closest(".dropdown").querySelector(".dropdown__value").innerText =
      target.innerText;
    target
      .closest(".dropdown")
      .querySelector(".dropdown__list")
      .classList.remove("dropdown__list_active");
  }
});
