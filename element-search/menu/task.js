"use strict";

// const menuLinks = Array.from(document.querySelectorAll(".menu__link"));

// menuLinks.forEach((link) => {
//   link.onclick = (event) => {
//     if (checkSubMenu(link)) {
//       event.preventDefault();
//       showSubMenu(link);
//     }
//   };
// });

document.addEventListener("click", (event) => {
  const target = event.target,
    activeMenu = document.querySelector(".menu.menu_sub.menu_active");
  if (activeMenu) {
    activeMenu.classList.remove("menu_active");
  }
  if (target.classList.contains("menu__link")) {
    if (checkSubMenu(target)) {
      event.preventDefault();
      showSubMenu(target);
    }
  }
});

function showSubMenu(item) {
  item
    .closest(".menu__item")
    .querySelector(".menu.menu_sub")
    .classList.add("menu_active");
}
function checkSubMenu(item) {
  return item.closest(".menu__item").querySelector(".menu.menu_sub");
}
