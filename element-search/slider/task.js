"use strict";

const slides = Array.from(document.querySelectorAll(".slider__item")),
  dots = Array.from(document.querySelectorAll(".slider__dot"));
let activeSlide = 0;

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("slider__dot")) {
    dotsChangeSlide(dots.indexOf(target));
  }
  if (target.classList.contains("slider__arrow_next")) {
    changeSlide("right");
  }
  if (target.classList.contains("slider__arrow_prev")) {
    changeSlide("left");
  }
});

function changeSlide(dir) {
  if (dir === "right") {
    slides[activeSlide].classList.remove("slider__item_active");
    activeSlide++;
    if (activeSlide === slides.length) {
      activeSlide = 0;
    }
    slides[activeSlide].classList.add("slider__item_active");
  }
  if (dir === "left") {
    slides[activeSlide].classList.remove("slider__item_active");
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }
    slides[activeSlide].classList.add("slider__item_active");
  }
  getCurrentDot();
}

function dotsChangeSlide(index) {
  slides[activeSlide].classList.remove("slider__item_active");
  activeSlide = index;
  slides[activeSlide].classList.add("slider__item_active");
  getCurrentDot();
}

function getCurrentDot() {
  if (document.querySelector(".slider__dot_active")) {
    document
      .querySelector(".slider__dot_active")
      .classList.remove("slider__dot_active");
  }
  dots[activeSlide].classList.add("slider__dot_active");
}
getCurrentDot();
