import { countTasks } from "../../utils/counters.js";
import { tasks } from "../../../index.js";
export function deleteAllTasks() {
  console.log("deleteAllTasks звпустился");

  const deleteAllBtn = document.getElementById("deleteAll");

  const modal2 = document.createElement("div");
  modal2.id = "modal";
  modal2.className = "modalDeleteAll ";

  const modalContentWarning = document.createElement("div");
  modalContentWarning.className = "modal-contentDeleteAll ";

  const modalContentUPWarning = document.createElement("div");
  modalContentUPWarning.className = "modal-content_upDeleteAll ";

  const modalContentLowWarning = document.createElement("div");
  modalContentLowWarning.className = "modal-content_lowDeleteAll ";

  const itemDone = document.getElementById("cardBodyDone");
  const modalInputTittleWarning = document.createElement("div");
  modalInputTittleWarning.textContent = "Warning!";
  modalInputTittleWarning.className = "WarningDeleteAll ";

  const confirmText = document.createElement("div");
  confirmText.textContent = "Do you really wanna dellete all cards?";
  confirmText.classList.add("confirmText");

  const modalButtonConfirmWarning = document.createElement("button");
  modalButtonConfirmWarning.className = "modal-button_confirmDeleteAll";
  modalButtonConfirmWarning.textContent = "Confirm";

  const modalButtonCancelWarning = document.createElement("button");
  modalButtonCancelWarning.className = "modal-button_cancelDeleteAll ";
  modalButtonCancelWarning.textContent = "Cancel";
  const containerButtons = document.createElement("div");
  containerButtons.classList.add("containerButtons");

  modalContentWarning.appendChild(modalContentUPWarning);
  modalContentWarning.appendChild(modalContentLowWarning);
  modalContentUPWarning.appendChild(modalInputTittleWarning);
  modalContentWarning.append(confirmText);
  modalContentWarning.append(containerButtons);
  containerButtons.appendChild(modalButtonConfirmWarning);
  containerButtons.appendChild(modalButtonCancelWarning);

  modal2.appendChild(modalContentWarning);
  document.body.appendChild(modal2);

  const closeBtn = document.getElementsByClassName(
    "modal-button_cancelDeleteAll"
  )[0];

  /*listeners*/

  deleteAllBtn.addEventListener("click", function () {
    modal2.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal2.style.display = "none";
  });

  modalButtonConfirmWarning.addEventListener("click", function () {
    modal2.style.display = "none";
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
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal2) {
      modal2.style.display = "none";
    }
  });
}
