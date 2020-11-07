"use strict";

const items = document.querySelector("#items"),
  request = new XMLHttpRequest();

if (localStorage.cyData) {
  const oldCyList = JSON.parse(localStorage.cyData);
  for (const key in oldCyList) {
    showCY(oldCyList[key].CharCode, oldCyList[key].Value);
  }
}

request.open("GET", "https://netology-slow-rest.herokuapp.com", true);
request.send();

request.addEventListener("readystatechange", function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector("#loader").classList.remove("loader_active");
    
    const oldCyList = Array.from(items.querySelectorAll(".item")),
      cyList = JSON.parse(this.responseText).response.Valute;

    oldCyList.forEach((item) => item.remove());
    for (const key in cyList) {
      showCY(cyList[key].CharCode, cyList[key].Value);
    }
    localStorage.cyData = JSON.stringify(cyList);
  }
});

function showCY(code, value) {
  items.insertAdjacentHTML(
    "beforeend",
    `
    <div class="item">
        <div class="item__code">
            ${code}
        </div>
        <div class="item__value">
            ${value}
        </div>
        <div class="item__currency">
            руб.
        </div>
    </div>
    `
  );
}
