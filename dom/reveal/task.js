"use strict";

const blocks = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener("scroll", () => {
  blocks.forEach((block) => isVisible(block));
});

function isVisible(el) {
  return el.getBoundingClientRect().top < 500
    ? el.classList.add("reveal_active")
    : false;
}
