"use strict";

const dead = document.getElementById("dead"),
  lost = document.getElementById("lost");
let moleCount = 0,
  lostCount = 0;

// Мой вариант с делегированием кажется получше,
//  но вариант ниже тоже работает))
// Неясно до конца, что нужно реализовать при победе,
//  и какие вообще для нее условия..

// function getHole(index) {
//   return document.getElementById(`hole${index}`);
// }

// for (let i = 1; i < 10; i++) {
//   getHole(i).onclick = () => checkMole(getHole(i));
// }

// function checkMole(hole) {
//   if (hole.classList.contains("hole_has-mole")) {
//     moleCount++;
//     dead.innerText = moleCount;
//     if (moleCount === 10) {
//       alert("Winner, Winner, chicken dinner!");
//       clearScore();
//     }
//   } else {
//     lostCount++;
//     lost.innerText = lostCount;
//   }
// }

function clearScore() {
  moleCount = 0;
  lostCount = 0;
  dead.innerText = moleCount;
  lost.innerText = lostCount;
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("hole_has-mole")) {
    moleCount++;
    dead.innerText = moleCount;
    if (moleCount === 10) {
      alert("Winner, Winner, chicken dinner!");
      clearScore();
    }
  } else {
    lostCount++;
    lost.innerText = lostCount;
  }
});
