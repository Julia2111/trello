import { addNewTask, modalButtonConfirm } from "../main/addTodo/addTodo.js";
import { modalInputTittle } from "../main/addTodo/addTodo.js";
import { modalInputDescription } from "../main/addTodo/addTodo.js";
import { tasks } from "../../index.js";
import { countTasks } from "./counters.js";
import { usersName } from "../../index.js";

export function initNewCard() {
  //cpomponents
  modalButtonConfirm.addEventListener("click", () => {
    const title = modalInputTittle.value.trim();
    const description = modalInputDescription.value.trim();
    const userName = document.getElementById("selectUser").value;
    if (title !== "" && description !== "") {
      createNewCard(title, description, 1, userName);
    } else {
      alert("Пожалуйста, заполните все обязательные поля.");
      return false;
    }

    modalInputTittle.value = "";
    modalInputDescription.value = "";
    countTasks();
  });

  function createCustomElement(tag, className, idUsers) {
    const element = document.createElement(tag);
    element.className = className;
    if (idUsers) {
      element.id = idUsers;
    }
    return element;
  }
  /* вынести*/
  function createNewCard(title, description, idUsers, usersName) {
    modalInputTittle.innerText = "";
    modalInputDescription.innerText = "";
    let currentTime = new Date().toLocaleTimeString();
    const newTask = {
      status: "todo",
      title: title,
      description: description,
      editedTitle: "",
      id: Date.now(),
      user: usersName,
      time: currentTime,
    };
    let tasksLocStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    tasksLocStorage.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasksLocStorage));

    const cardItem = createCustomElement(
      "div",
      "cards__item cards__item--todo"
    );
    cardItem.setAttribute("draggable", "true");

    const cardTitle = createCustomElement("div", "cards__title");

    const cardTitleText = createCustomElement("span", "cards__title-text");
    cardTitleText.innerText = newTask.title;

    const cardTitleButtons = createCustomElement("div", "cards__title-buttons");

    const todoEditBtn = createCustomElement(
      "button",
      "cards__title-button",
      "todoEditBtn"
    );
    todoEditBtn.innerText = "EDIT";

    todoEditBtn.addEventListener("click", editBtn);

    const btnToDoDelete = createCustomElement(
      "button",
      "cards__title-button",
      "btnDelTodo"
    );
    btnToDoDelete.innerText += "DELETE";
    btnToDoDelete.addEventListener("click", spliceTaskFromArray);

    function spliceTaskFromArray(event) {
      const currentElement = event.target;
      const closestCardItem = currentElement.closest(".cards__item__todo");
      const taskIdToDelete = closestCardItem.dataset.taskId;

      const taskIndex = tasks.findIndex((task) => task.id == taskIdToDelete);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex);
        cardsItemToDO.remove();
        countTasks();
        console.log(tasks);
      }
    }

    const InPrBtnBack = createCustomElement(
      "button",
      "cards__title-button",
      "todoDeleteBtn",
      "backBtn"
    );
    InPrBtnBack.innerText += "Back";
    InPrBtnBack.addEventListener("click", backToTodo);
    const InPrBackComplete = createCustomElement(
      "button",
      "cards__title-button",
      "completeBtn"
    );
    InPrBackComplete.innerText += "Complete";
    InPrBackComplete.addEventListener("click", transferCardDone);
    const itemDone = document.getElementById("cardBodyDone");
    const btnDoneDelete = createCustomElement(
      "button",
      "cards__title-button",
      "btnDelDone"
    );
    btnDoneDelete.innerText += "DELETE";
    btnDoneDelete.addEventListener("click", deleteTasksDone);

    const cardsItemToDO = document.createElement("div");
    cardsItemToDO.classList.add("cards__item__todo", "cards__item--todo");
    cardsItemToDO.dataset.taskId = newTask.id;

    const cardsItemToInPr = document.createElement("div");
    cardsItemToInPr.classList.add("cards__item", "cards__item--inProgress");
    cardsItemToInPr.dataset.taskId = newTask.id;

    const cardsItemDone = document.createElement("div");
    cardsItemDone.classList.add("cards__item", "cards__item--Done");
    cardsItemDone.dataset.taskId = newTask.id;

    const cardDesc = createCustomElement("div", "cards__desc");

    const cardDescText = createCustomElement("span", "cards__desc-text");
    cardDescText.innerText = newTask.description;

    const cardDescButton = createCustomElement("button", "cards__desc-btn");
    cardDescButton.innerText = ">";
    cardDescButton.addEventListener("click", transferCard);

    const cardInfo = createCustomElement("div", "cards__info");

    const cardUser = createCustomElement("span", "cards__user");
    cardUser.innerText = usersName;

    const cardTime = createCustomElement("span", "cards__time");
    cardTime.innerText = newTask.time;

    const cardBodyTodo = document.getElementById("cardBodyTodo");

    const cardBodyInProgress = document.getElementById("cardBodyInProgress");

    const cardBodyDone = document.getElementById("cardBodyDone");

    const cardBodyTodoTop = createCustomElement(
      "div",
      "cardBodyTodoTop",
      "cardBodyTodoTop"
    );
    const cardBodyTodoTopInner = createCustomElement(
      "div",
      "cardBodyTodoTopInner",
      "cardBodyTodoTopInner"
    );

    const cardBodyTodoMiddle = createCustomElement(
      "div",
      "cardBodyTodoMiddle",
      "cardBodyTodoMiddle"
    );

    const cardBodyTodoBottom = createCustomElement(
      "div",
      "cardBodyTodoBottom",
      "cardBodyTodoBottom"
    );

    const cardBodyDoneTop = createCustomElement(
      "div",
      "cardBodyDoneTop",
      "cardBodyDoneTop"
    );
    const cardBodyDoneTopInner = createCustomElement(
      "div",
      "cardBodyDoneTopInner",
      "cardBodyDoneTopInner"
    );

    const cardBodyDoneMiddle = createCustomElement(
      "div",
      "cardBodyDoneMiddle",
      "cardBodyDoneMiddle"
    );

    const cardBodyDoneBottom = createCustomElement(
      "div",
      "cardBodyDoneBottom",
      "cardBodyDoneBottom"
    );

    cardInfo.append(cardUser, cardTime);
    cardDesc.append(cardDescText, cardDescButton);

    if (newTask.status === "todo") {
      cardBodyTodo.append(cardsItemToDO);
      cardsItemToDO.append(cardBodyTodoTop);
      cardBodyTodoTop.append(cardTitleText, cardBodyTodoTopInner);
      cardBodyTodoTopInner.append(todoEditBtn, btnToDoDelete);
      cardsItemToDO.append(cardBodyTodoMiddle);
      cardBodyTodoMiddle.append(cardDescText, cardDescButton);
      cardsItemToDO.append(cardBodyTodoBottom);
      cardBodyTodoBottom.append(cardUser, cardTime);
    }
    const cardBodyInPrTop = createCustomElement(
      "div",
      "cardBodyInPrTop",
      "cardBodyInPrTop"
    );
    const cardBodyInPropInner = createCustomElement(
      "div",
      "cardBodyInPrTopInner",
      "cardBodyInPrTopInner"
    );

    const cardBodyInPrMiddle = createCustomElement(
      "div",
      "cardBodyInPrMiddle",
      "cardBodyInPrMiddle"
    );

    const cardBodyInPrBottom = createCustomElement(
      "div",
      "cardBodyTInPrBottom",
      "cardBodyInPrBottom"
    );

    function transferCard() {
      //add 1 func
      newTask.status = "inProgress";
      cardTitleText.innerText = newTask.editedTitle || newTask.title;
      cardsItemToDO.remove();
      countTasks();
      if (newTask.status === "inProgress") {
        cardBodyInProgress.append(cardsItemToInPr);
        cardsItemToInPr.append(cardBodyInPrTop);
        cardBodyInPrTop.append(title, cardBodyInPropInner);
        cardBodyInPropInner.append(InPrBtnBack, InPrBackComplete);
        cardsItemToInPr.append(cardBodyInPrMiddle);
        cardBodyInPrMiddle.append(cardDescText);
        cardsItemToInPr.append(cardBodyInPrBottom);
        cardBodyInPrBottom.append(cardUser, cardTime);
      }
    }

    function transferCardDone() {
      newTask.status = "Done";
      cardsItemToInPr.remove();
      countTasks();
      if (newTask.status === "Done") {
        cardBodyDone.append(cardsItemDone);
        cardsItemDone.append(cardBodyDoneTop);
        cardBodyDoneTop.append(title, btnDoneDelete);
        cardsItemDone.append(cardBodyDoneMiddle);
        cardBodyDoneMiddle.append(cardDescText);
        cardsItemDone.append(cardBodyDoneBottom);
        cardBodyDoneBottom.append(cardUser, cardTime);
      }
    }

    function backToTodo() {
      newTask.status = "todo";
      cardsItemToInPr.remove();
      countTasks();
      cardBodyTodo.append(cardsItemToDO);
      cardsItemToDO.append(cardBodyTodoTop);
      cardBodyTodoTop.append(title, cardBodyTodoTopInner);
      cardBodyTodoTopInner.append(todoEditBtn, btnToDoDelete);
      cardsItemToDO.append(cardBodyTodoMiddle);
      cardBodyTodoMiddle.append(cardDescText, cardDescButton);
      cardsItemToDO.append(cardBodyTodoBottom);
      cardBodyTodoBottom.append(cardUser, cardTime);
    }

    function editBtn() {
      console.log("editBtn запустился");
      const modal = document.createElement("div");
      modal.id = "modal";
      modal.className = "modal";

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";

      const modalContentUP = document.createElement("div");
      modalContentUP.className = "modal-content_up";

      const modalContentMiddle = document.createElement("div");
      modalContentMiddle.className = "modal-content_middle";

      const modalContentLow = document.createElement("div");
      modalContentLow.className = "modal-content_low";

      const closeSpan = document.createElement("span");
      closeSpan.className = "close";
      closeSpan.innerHTML = "&times;";
      closeSpan.addEventListener("click", () => {
        modal.style.display = "none";
        countTasks();
      });

      const modalInputTittle = document.createElement("input");
      modalInputTittle.placeholder = "Tittle";
      modalInputTittle.className = "ModalTittle";

      const modalInputDescription = document.createElement("textarea");
      modalInputDescription.className = "Description";
      modalInputDescription.placeholder = "Your Description";

      const modalButtonConfirm = document.createElement("button");
      modalButtonConfirm.className = "modal-button_confirm";
      modalButtonConfirm.textContent = "Confirm";

      const modalButtonCancel = document.createElement("button");
      modalButtonCancel.className = "modal-button_cancel";
      modalButtonCancel.textContent = "Cancel";
      const cardUsers = createCustomElement("span", "cards__user");
      cardUsers.innerText = usersName;
      modal.appendChild(modalContent);
      modalContent.appendChild(modalContentUP);
      modalContent.appendChild(modalContentMiddle);
      modalContent.appendChild(modalContentLow);
      modalContentUP.appendChild(closeSpan);
      modalContentUP.appendChild(modalInputTittle);
      modalContentMiddle.appendChild(modalInputDescription);
      modalContentLow.appendChild(cardUsers);
      modalContentLow.appendChild(modalButtonConfirm);
      modalContentLow.appendChild(modalButtonCancel);

      document.body.appendChild(modal);
      const btnEdit = document.getElementById("todoEditBtn");

      const closeBtn = document.getElementsByClassName("close")[0];

      btnEdit.addEventListener("click", function () {
        document.querySelectorAll(".modal").forEach((modal) => {
          modal.style.display = "none";
        });
        modal.style.display = "block";
        closeSpan.click();
      });

      modalButtonConfirm.addEventListener("click", () => {
        let title = modalInputTittle.value.trim();
        let description = modalInputDescription.value.trim();
        if (title !== "" && description !== "") {
          newTask.editedTitle = title;
          cardTitleText.innerText = newTask.editedTitle;
          cardDescText.innerText = description;
        } else {
          alert("Пожалуйста, заполните все обязательные поля.");
          return false;
        }
        countTasks();
        modal.style.display = "none";
      });

      todoEditBtn.addEventListener("click", function () {
        document.querySelectorAll(".modal").forEach((modal) => {
          modal.style.display = "none";
        });
        modal.style.display = "block";
      });

      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });

      modalButtonCancel.addEventListener("click", function () {
        modal.style.display = "none";
      });

      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    }
    function deleteTasksDone() {
      if (itemDone.children.length === 0) {
        alert("Карточек для удаления нет! Их нужно сразу создать!!!!");
      } else {
        while (itemDone.firstChild) {
          for (let i = tasks.length - 1; i >= 0; i--) {
            if (tasks[i].status === "Done") {
              tasks.splice(i, 1);
            }
          }
          itemDone.removeChild(itemDone.firstChild);
          countTasks();
          console.log(tasks);
        }
      }
    }
    tasks.push(newTask);
    console.log(tasks);
  }
}
