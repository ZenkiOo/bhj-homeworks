"use strict";
const elems = [],
  tasks = document.querySelector(".tasks__list"),
  tasksInput = document.querySelector(".tasks__input"),
  addButton = document.querySelector(".tasks__add");

if (!localStorage.getItem("task-data")) {
  localStorage.setItem("task-data", JSON.stringify((dataObj = {})));
}
renderData();

addButton.onclick = function () {
  if (tasksInput.value) {
    addTask(tasksInput.value);
    setData();
    renderData();
  }
  tasksInput.value = "";
};

document.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("task__remove")) {
    target.closest(".task").remove();
    setData();
    renderData();
  }
});

function addTask(value) {
  tasks.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task">
        <div class="task__title">
            ${value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `
  );
}

function setData() {
  const taskArr = Array.from(document.querySelectorAll(".task")),
    dataObj = {};

  taskArr.forEach(
    (task, i) =>
      (dataObj[`task${i}`] = task.querySelector(".task__title").innerText)
  );
  localStorage.setItem("task-data", JSON.stringify(dataObj));
}

function renderData() {
  const taskArr = Array.from(document.querySelectorAll(".task"));
  taskArr.forEach((task) => task.remove());

  const TaskList = Object.values(JSON.parse(localStorage.getItem("task-data")));

  TaskList.forEach((task) => addTask(task));
}
