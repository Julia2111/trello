import { tasks } from "../../index.js";

export function countTasks() {
  const todoCounter = document.getElementById("toDoCounter");

  const inProgressCounter = document.getElementById("inProgressCounter");
  const doneCounter = document.getElementById("doneCounter");

  const todoCounterNumber = tasks.filter(
    (task) => task.status === "todo"
  ).length;
  todoCounter.innerText = todoCounterNumber;

  const inPrNumber = tasks.filter(
    (task) => task.status === "inProgress"
  ).length;
  inProgressCounter.innerText = inPrNumber;

  const doneNumbers = tasks.filter((tasks) => tasks.status === "Done").length;
  doneCounter.innerText = doneNumbers;
}
