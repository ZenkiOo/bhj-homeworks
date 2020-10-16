"use strict";

const clickerCounter = document.getElementById("clicker__counter"),
  cookie = document.getElementById("cookie"),
  speedValue = document.getElementById("clicker__speed"),
  maxSpeedValue = document.getElementById("clicker__maxspeed"),
  clicks = [],
  maxSpeed = [0];
let score = 0,
  speed = 0;

function getScore(el) {
  score++;
  el.innerText = score;
}

function getSpeed(el) {
  const click = new Date().getTime();
  clicks.push(click);
  if (clicks.length > 1) {
    speed = 1 / ((clicks[1] - clicks[0]) / 1000);
    clicks.splice(0, 1);
  }
  el.innerText = speed.toFixed(2);
}

function getMaxSpeed(el) {
  if (speed > maxSpeed[0]) {
    maxSpeed.push(speed);
    maxSpeed.splice(0, 1);
  }
  el.innerText = maxSpeed[0].toFixed(2);
}

function getFatCookie(el) {
  el.style.transition = "0.1s";
  el.style.width = "250px";
  setTimeout(() => {
    el.style.width = "200px";
  }, 100);
}

cookie.onclick = function () {
  getScore(clickerCounter);
  getSpeed(speedValue);
  getMaxSpeed(maxSpeedValue);
  getFatCookie(cookie);
};
