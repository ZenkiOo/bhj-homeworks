"use strict";

const interests = Array.from(document.querySelectorAll(".interest")),
  boxGroups = [];

for (let i = 0; i < interests.length; i++) {
  if (interests[i].querySelectorAll(".interest__check").length > 1) {
    boxGroups.push(
      Array.from(interests[i].querySelectorAll(".interest__check"))
    );
  }
}

for (let i = boxGroups.length - 1; i >= 0; i--) {
  const group = boxGroups[i];
  group.forEach((elem) => {
    elem.addEventListener("change", (event) => {
      const values = [],
        target = event.target;

      if (target === group[0]) {
        for (let j = 1; j < group.length; j++) {
          group[j].checked = true;
        }
      }

      if (target === group[0] && target.checked === false) {
        for (let j = 1; j < group.length; j++) {
          group[j].checked = false;
        }
      }

      for (let j = 0; j < group.length; j++) {
        const element = group[j];
        values.push(element.checked);
      }

      values.splice(0, 1);

      for (let j = 0; j < values.length; j++) {
        const element = values[j];
        if (!element) {
          group[0].indeterminate = true;
        }
      }

      function isValueFalse(el) {
        return !el;
      }
      function isValueTrue(el) {
        return el;
      }
      
      if (values.every(isValueFalse)) {
        group[0].indeterminate = false;
        group[0].checked = false;
      }
      if (values.every(isValueTrue)) {
        group[0].indeterminate = false;
        group[0].checked = true;
      }
    });
  });
}
