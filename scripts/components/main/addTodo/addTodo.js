export const modalButtonConfirm = document.createElement("button");
export const modalInputTittle = document.createElement("input");
export const modalInputDescription = document.createElement("textarea");

import { tasks } from "../../../index.js";

export function addNewTask() {
  console.log("addNewTask запустился");
  const btnAddTodo = document.getElementById("addTodo");

  const modal = document.createElement("div");
  modal.id = "modal";
  modal.className = "modalTodo";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-contentTodo";

  const modalContentUP = document.createElement("div");
  modalContentUP.className = "modal-content_upTodo";

  const modalContentMiddle = document.createElement("div");
  modalContentMiddle.className = "modal-content_middleTodo";

  const modalContentLow = document.createElement("div");
  modalContentLow.className = "modal-content_lowTodo";

  const btnsTodo = document.createElement("div");
  btnsTodo.className = "btnsTodo";

  const btnsInnerTodo = document.createElement("div");
  btnsInnerTodo.className = "btnsInnerTodo";

  const closeSpan = document.createElement("span");
  closeSpan.className = "closeTodo";
  closeSpan.innerHTML = "&times;";

  modalInputTittle.placeholder = "Tittle";
  modalInputTittle.className = "ModalTittleTodo";
  modalInputTittle.setAttribute("required", "");

  modalInputDescription.className = "DescriptionTodo";
  modalInputDescription.placeholder = "Your Description";
  modalInputDescription.setAttribute("required", "");

  modalButtonConfirm.id = "confirmTodo";
  modalButtonConfirm.className = "modal-button_confirmTodo";
  modalButtonConfirm.textContent = "Confirm";

  const modalButtonCancel = document.createElement("button");
  modalButtonCancel.className = "modal-button_cancelTodo";
  modalButtonCancel.textContent = "Cancel";

  const modalButtonSelectUser = document.createElement("select");
  modalButtonSelectUser.className = "SelectionTodo";
  modalButtonSelectUser.id = "selectUser";
  console.log(modalButtonSelectUser);

  modalContent.appendChild(modalContentUP);
  modalContent.appendChild(modalContentMiddle);
  modalContent.appendChild(modalContentLow);
  modalContentUP.appendChild(closeSpan);
  modalContentUP.appendChild(modalInputTittle);
  modalContent.append(btnsTodo);
  modalContentMiddle.appendChild(modalInputDescription);
  btnsTodo.appendChild(modalButtonSelectUser);
  btnsTodo.append(btnsInnerTodo);
  btnsInnerTodo.appendChild(modalButtonConfirm);
  btnsInnerTodo.appendChild(modalButtonCancel);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  const closeBtn = document.getElementsByClassName("closeTodo")[0];
  /////

  btnAddTodo.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modalButtonCancel.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modalButtonConfirm.addEventListener("click", function (event) {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
