"use strict";

const textarea = document.getElementById("editor"),
  button = document.querySelector(".clear");

if (localStorage.input) {
  textarea.value = localStorage.input;
}

textarea.oninput = () => (localStorage.input = textarea.value);

button.onclick = () => {
  textarea.value = "";
  localStorage.input = "";
};
