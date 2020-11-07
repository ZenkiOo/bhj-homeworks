"use strict";

const modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".modal__close");

if (!getCookie(modal)) modal.classList.add("modal_active");

modalClose.onclick = function () {
  modal.classList.remove("modal_active");
  setCookie(modal, "true");
};

function getCookie(name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

function setCookie(name, value, props) {
  props = props || {};

  let exp = props.expires;

  if (typeof exp == "number" && exp) {
    let d = new Date();

    d.setTime(d.getTime() + exp * 1000);

    exp = props.expires = d;
  }

  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }

  value = encodeURIComponent(value);

  let updatedCookie = name + "=" + value;

  for (let propName in props) {
    updatedCookie += "; " + propName;

    let propValue = props[propName];

    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}
