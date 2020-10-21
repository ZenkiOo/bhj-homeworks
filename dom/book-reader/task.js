"use strict";

const fontControls = Array.from(document.querySelectorAll(".font-size")),
  colorControls = Array.from(document.querySelectorAll(".color")),
  book = document.querySelector("#book");

book.classList.add("book_fs-reg", "book_color-black", "book_bg-white");

document.addEventListener("click", (event) => {
  const target = event.target;
  function isClass(className) {
    return target.classList.contains(className);
  }

  if (isClass("font-size_small")) {
    event.preventDefault();
    setActive(target);
    setProp("fs", "book_fs-small");
  }
  if (isClass("font-size_reg")) {
    event.preventDefault();
    setActive(target);
    setProp("fs", "book_fs-reg");
  }
  if (isClass("font-size_big")) {
    event.preventDefault();
    setActive(target);
    setProp("fs", "book_fs-big");
  }
  if (isClass("text_color_black")) {
    event.preventDefault();
    setActiveColor(target);
    setProp("color", "book_color-black");
  }
  if (isClass("text_color_gray")) {
    event.preventDefault();
    setActiveColor(target);
    setProp("color", "book_color-gray");
  }
  if (isClass("text_color_whitesmoke")) {
    event.preventDefault();
    setActiveColor(target);
    setProp("color", "book_color-whitesmoke");
  }
  if (isClass("bg_color_black")) {
    event.preventDefault();
    setActiveColor(target);
    setProp("bg", "book_bg-black");
  }
  if (isClass("bg_color_gray")) {
    event.preventDefault();
    setActiveColor(target);
    setProp("bg", "book_bg-gray");
  }
  if (isClass("bg_color_white")) {
    event.preventDefault();
    setActiveColor(target);
    setProp("bg", "book_bg-white");
  }
});

function setProp(prop, className) {
  const classList = Array.from(book.classList);
  clearClassList();
  if (prop === "fs") {
    book.classList.add(
      "book",
      `${className}`,
      `${classList[2]}`,
      `${classList[3]}`
    );
  }
  if (prop === "color") {
    book.classList.add(
      "book",
      `${classList[1]}`,
      `${className}`,
      `${classList[3]}`
    );
  }
  if (prop === "bg") {
    book.classList.add(
      "book",
      `${classList[1]}`,
      `${classList[2]}`,
      `${className}`
    );
  }
}

function clearClassList() {
  const classList = book.classList;
  while (classList.length > 0) {
    classList.remove(classList.item(0));
  }
}

function setActive(el) {
  document
    .querySelector(".font-size_active")
    .classList.remove("font-size_active");
  el.classList.add("font-size_active");
}

function setActiveColor(el) {
  el.closest(".book__control")
    .querySelector(".color_active")
    .classList.remove("color_active");
  el.classList.add("color_active");
}
