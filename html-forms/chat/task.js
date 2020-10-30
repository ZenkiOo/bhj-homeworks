"use strict";

const chatWidget = document.querySelector(".chat-widget"),
  messages = document.querySelector(".chat-widget__messages"),
  chatInput = document.querySelector(".chat-widget__input"),
  botMessages = [
    "Я бот",
    "Я тоже бот",
    "Надоели вы мне",
    "Сейчас поищу, есть еще кто-то, чтобы ответить",
    "Я спал вообще-то!",
    "Можно я просто не буду отвечать?",
    "Драся",
    "Очень здоровский бот, правда?",
  ];

printMessage("Дратути!");

chatWidget.onclick = () => {
  chatWidget.classList.add("chat-widget_active");
};

chatInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && chatInput.value) {
    printMessage(chatInput.value);

    const messagesList = messages.querySelectorAll(".message"),
      lastMessage = messagesList[messagesList.length - 1],
      randomBotMessage =
        botMessages[Math.floor(Math.random() * botMessages.length)];

    lastMessage.classList.add("message_client");
    chatInput.value = "";

    setTimeout(() => {
      printMessage(randomBotMessage);
    }, 300);
  }
});

function printMessage(message) {
  const curDate = new Date(),
    time = `
    ${curDate
      .getHours()
      .toString()
      .padStart(2, "0")}
      :
    ${curDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}
    `;

  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${message}
    </div>
  </div>
`;
}
