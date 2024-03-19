import { initHeader } from "./components/header/header.js";
import { initMain } from "./components/main/main.js";
import { initSidebar } from "./components/sidebar/sidebar.js";
import { initClock } from "./components/utils/clock.js";
import { countTasks } from "./components/utils/counters.js";
import { addNewTask } from "./components/main/addTodo/addTodo.js";
import { deleteAllTasks } from "./components/main/deleteAllButton/deleteAllBtn.js";
import { logIn } from "./components/header/authorization/author.js";
import { initNewCard } from "./components/utils/addNewTask.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initClock();
  initMain();
  initSidebar();
  addNewTask();
  logIn();
  initNewCard();
  countTasks();
  deleteAllTasks();
});

export const tasks = [];

const URLTodos = "https://jsonplaceholder.typicode.com/todos";
const URLUsers = "https://jsonplaceholder.typicode.com/users";

const dataUsers = await getData(URLUsers).catch(notAdd);
const dataTodos = await getData(URLTodos).catch(notAdd);
const usersIdTodos = dataTodos.map((users) => users.userId);
const todosStatus = dataTodos.map((stat) => stat.completed);

export const usersName = dataUsers.map((user) => user.name);

export const idUsers = dataUsers.map((userId) => userId.id);

async function getData(url) {
  const array = [];
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((item) => array.push(item));
  return array;
}

export const selectionTodo = document.getElementById("selectUser");
for (let i = 0; i < usersName.length; i++) {
  const option = document.createElement("option");
  option.id = "optionUser";
  option.innerText = usersName[i];
  selectionTodo.insertAdjacentElement("beforeend", option);
}
selectionTodo.addEventListener("change", addUserName);

function addUserName() {
  const userName = document.getElementById("selectUser").value;
  return userName;
}

function notAdd() {
  alert("SORRY! ERROR 404");
}
