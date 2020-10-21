"use strict";

const rotators = Array.from(document.querySelectorAll(".rotator")),
  cases = Array.from(document.querySelectorAll(".rotator__case"));
let interval = 1000;

cases.forEach((el) => (el.style.color = el.dataset.color));

const rotatorInt = setInterval(() => {
  rotators.forEach((rotator) => rotate(rotator));
}, interval);

function rotate(arr) {
  const activeCase = arr.querySelector(".rotator__case.rotator__case_active"),
    nextEl = activeCase.nextElementSibling;
  activeCase.classList.remove("rotator__case_active");
  if (nextEl) {
    nextEl.classList.add("rotator__case_active");
  } else {
    arr.querySelector(".rotator__case").classList.add("rotator__case_active");
  }
}

// Как ни крутил тудасюда, так и не придумал как реализовать смену
// таймаута для вызова функции.. Подскажите куда копать)) 
// Уже и на Timeout пробовал.. Не идет..