"use strict";

const links = Array.from(document.querySelectorAll(".has-tooltip"));

links.forEach((link) => {
  const linkAttr = link.getAttribute("title"),
    linkLeft = link.getBoundingClientRect().left,
    linkTop = link.getBoundingClientRect().top;
  link.insertAdjacentHTML(
    "afterEnd",
    `<div class="tooltip" style="left: ${linkLeft}px; top: ${
      linkTop + 20
    }px">${linkAttr}</div>`
  );
});

const tooltips = Array.from(document.querySelectorAll(".tooltip"));

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const tooltip = tooltips.find(
      (tooltip) => tooltip.innerText === link.getAttribute("title")
    );
    tooltip.classList.toggle("tooltip_active");
  });
});
