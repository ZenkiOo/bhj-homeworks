class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.secElement = container.querySelector(".status__sec");
    this.currentKey = "";

    this.reset();
    this.registerEvents();
  }

  counter() {
    const word = Array.from(this.wordElement.querySelectorAll(".symbol")),
      wordLength = Array.from(this.wordElement.querySelectorAll(".symbol"))
        .length;
    let timerValue = wordLength + 1;

    const timer = setInterval(() => {
      
      timerValue--;
      this.secElement.textContent = `0${timerValue}`;
      // Это решение работает, но не идеально...
      // Иногда происходит сбой, когда это условие выполняется не в тот 
      // момент.. Может подскажете как доработать или задать другое условие???
      // Никакого другого рабочего условия придумать не удалось..((
      //   \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
      if (this.currentKey === word[wordLength - 1].textContent) {
        clearInterval(timer);
      }
      if (timerValue < 0) {
        clearInterval(timer);
        this.fail()
        return (this.secElement.textContent = "00");
      }
    }, 1000);
  }

  reset() {
    this.setNewWord();
    this.counter();
    this.currentKey = "";
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.secElement.textContent = `0${
      Array.from(this.wordElement.querySelectorAll(".symbol")).length
    }`;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
    document.addEventListener("keydown", (event) => {
      this.currentKey = event.key.toLowerCase();
      if (this.currentSymbol.textContent === event.key.toLowerCase()) {
        this.success();
        // console.log(this.currentSymbol);
      } else if (this.currentSymbol.textContent !== event.key.toLowerCase()) {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
    this.counter();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.setNewWord();
    this.counter();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
