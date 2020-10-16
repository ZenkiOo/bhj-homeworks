"use strict";

// *** Version 1 ***

// function countTimer() {
//   const timer = document.getElementById("timer");
//   let timerValue = 5;
//   timer.innerText = timerValue;
//   const interval = setInterval(() => {
//     timerValue--;
//     if (timerValue < 0) {
//       clearInterval(interval);
//       alert("Вы победили в конкурсе!");
//       timerValue = 0;
//     }
//     timer.innerText = timerValue;
//   }, 1000);
// }
// window.onload = countTimer();

// *** Version 2 *** 

// function countTimer() {
//   const timer = document.getElementById("timer");
//   let hours = 1,
//    minutes = 0,
//    seconds = 5;
//   timer.innerText = ``;
  
//   const interval = setInterval(() => {

//     seconds--;

//     if (hours > 0 && (seconds < 0 && minutes == 0)) {
//       hours--;
//       minutes = 59;
//       seconds = 59;
//     }
//     if (hours > 0 && (seconds < 0 && minutes > 0)) {
//       minutes--;
//       seconds = 59;
//     }
//     if (hours == 0 && (seconds < 0 && minutes > 0)) {
//       minutes--;
//       seconds = 59;
//     }
//     if (hours == 0 && (seconds < 0 && minutes == 0)) {
//       clearInterval(interval);
//       alert("Вы победили в конкурсе!");
//       return seconds = 0;
//     }
//     if ((hours >= 10) && (minutes >= 10 && seconds >= 10)) {
//       timer.innerText = `${hours}:${minutes}:${seconds}`;
//     }
//     if ((hours >= 10) && (minutes < 10 && seconds < 10)) {
//       timer.innerText = `${hours}:0${minutes}:0${seconds}`;
//     }
//     if ((hours >= 10) && (minutes >= 10 && seconds < 10)) {
//       timer.innerText = `${hours}:${minutes}:0${seconds}`;
//     }
//     if ((hours >= 10) && (minutes < 10 && seconds >= 10)) {
//       timer.innerText = `${hours}:0${minutes}:${seconds}`;
//     }
//     if ((hours < 10) && (minutes < 10 && seconds < 10)) {
//       timer.innerText = `0${hours}:0${minutes}:0${seconds}`;
//     }
//     if ((hours < 10) && (minutes < 10 && seconds >= 10)) {
//       timer.innerText = `0${hours}:0${minutes}:${seconds}`;
//     }
//     if ((hours < 10) && (minutes >= 10 && seconds >= 10)) {
//       timer.innerText = `0${hours}:${minutes}:${seconds}`;
//     }
//     if ((hours < 10) && (minutes >= 10 && seconds < 10)) {
//       timer.innerText = `0${hours}:${minutes}:0${seconds}`;
//     }
//   }, 1000);
// }
// countTimer();

// *** Version 3 ***
// Тут не уверен, что сделал именно то, что нужно) 
// Но файл грузится)) Зачем location в итоге? и как организовать
// загрузку JPEG, например?

const el = document.createElement('A')
document.body.appendChild(el)
el.href = 'asd.asd';
el.target = "_blank";

function countTimer() {
  const timer = document.getElementById("timer");
  let hours = 0,
   minutes = 0,
   seconds = 3;
  timer.innerText = ``;
  
  const interval = setInterval(() => {

    seconds--;

    if (hours > 0 && (seconds < 0 && minutes == 0)) {
      hours--;
      minutes = 59;
      seconds = 59;
    }
    if (hours > 0 && (seconds < 0 && minutes > 0)) {
      minutes--;
      seconds = 59;
    }
    if (hours == 0 && (seconds < 0 && minutes > 0)) {
      minutes--;
      seconds = 59;
    }
    if (hours == 0 && (seconds < 0 && minutes == 0)) {
      clearInterval(interval);
      el.click()
      return seconds = 0;
      
    }
    if ((hours >= 10) && (minutes >= 10 && seconds >= 10)) {
      timer.innerText = `${hours}:${minutes}:${seconds}`;
    }
    if ((hours >= 10) && (minutes < 10 && seconds < 10)) {
      timer.innerText = `${hours}:0${minutes}:0${seconds}`;
    }
    if ((hours >= 10) && (minutes >= 10 && seconds < 10)) {
      timer.innerText = `${hours}:${minutes}:0${seconds}`;
    }
    if ((hours >= 10) && (minutes < 10 && seconds >= 10)) {
      timer.innerText = `${hours}:0${minutes}:${seconds}`;
    }
    if ((hours < 10) && (minutes < 10 && seconds < 10)) {
      timer.innerText = `0${hours}:0${minutes}:0${seconds}`;
    }
    if ((hours < 10) && (minutes < 10 && seconds >= 10)) {
      timer.innerText = `0${hours}:0${minutes}:${seconds}`;
    }
    if ((hours < 10) && (minutes >= 10 && seconds >= 10)) {
      timer.innerText = `0${hours}:${minutes}:${seconds}`;
    }
    if ((hours < 10) && (minutes >= 10 && seconds < 10)) {
      timer.innerText = `0${hours}:${minutes}:0${seconds}`;
    }
  }, 1000);
}
countTimer();