"use strict";

const form = document.forms[0],
  button = form.querySelector(".btn"),
  welcomeMsg = document.querySelector(".welcome"),
  logout = document.querySelector(".logout");

if (localStorage.id && localStorage.id != "false") {
  welcome();
}

button.onclick = function (event) {
  event.preventDefault();

  const request = new XMLHttpRequest();
  request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  request.send(new FormData(form));

  request.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      if (!response.success) {
        alert("Неверный логин/пароль");
        clearInput();
      } else {
        localStorage.id = response.user_id;
        welcome();
      }
    }
  });
};

logout.onclick = () => logOut();

function welcome() {
  form.style.display = "none";
  welcomeMsg.classList.add("welcome_active");
  welcomeMsg.querySelector("#user_id").innerText = localStorage.id;
  logout.classList.add("logout_active");
}
function logOut() {
  localStorage.id = false;
  form.style.display = "block";
  welcomeMsg.classList.remove("welcome_active");
  logout.classList.remove("logout_active");
  clearInput();
}

function clearInput() {
  Array.from(document.querySelectorAll(".control")).forEach((input) => {
    input.value = "";
  });
}
