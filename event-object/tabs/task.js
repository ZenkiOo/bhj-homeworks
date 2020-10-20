"use strict";

const tabNav = Array.from(document.querySelectorAll(".tab")),
  tabs = Array.from(document.querySelectorAll(".tab__content"));

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("tab")) {
    changeTab(target);
  }
});

function changeTab(tab) {
  const i = tabNav.indexOf(tab);
  tab
    .closest(".tabs")
    .querySelector(".tab__content.tab__content_active")
    .classList.remove("tab__content_active");

  tab
    .closest(".tabs")
    .querySelector(".tab.tab_active")
    .classList.remove("tab_active");

  tabNav[i].classList.add("tab_active");
  tabs[i].classList.add("tab__content_active");
}
