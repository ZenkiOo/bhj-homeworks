"use strict";

const request = new XMLHttpRequest(),
  pollTitle = document.querySelector(".poll__title"),
  pollAnswers = document.querySelector(".poll__answers");

request.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
request.send();

request.addEventListener("readystatechange", function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText),
      poll = response.data;

    pollTitle.innerText = poll.title;
    poll.answers.forEach((answer, id) => showButton(answer, id));

    document.addEventListener("click", function (event) {
      const target = event.target;

      if (target.classList.contains("poll__answer")) {
        alert("Спасибо, ваш голос засчитан!");
        const request = new XMLHttpRequest();
        request.open(
          "POST",
          "https://netology-slow-rest.herokuapp.com/poll.php"
        );
        request.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        request.send(`vote=${response.id}&answer=${target.dataset.id}`);

        request.addEventListener("readystatechange", function () {
          if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText),
              pollItems = Array.from(
                pollAnswers.querySelectorAll(".poll__answer")
              );

            pollItems.forEach((item) => item.remove());
            response.stat.forEach((stat) => {
              showStat(stat.answer, stat.votes);
            });
          }
        });
      }
    });
  }
});

function showButton(value, id) {
  pollAnswers.insertAdjacentHTML(
    "beforeend",
    `
    <button class="poll__answer" data-id="${id}">
        ${value}
    </button>
    `
  );
}
function showStat(answer, votes) {
  pollAnswers.insertAdjacentHTML(
    "beforeend",
    `
    <div>
        <span>
            ${answer}:
        </span>
        <span>
            <b>${votes}</b>
        </span>
    </div>
    `
  );
}
