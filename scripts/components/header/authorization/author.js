const usersLogin = ["group", "newUser"];
const boardNames = ["Tv", "new"];
export function logIn() {
  console.log("logIn запустился");
  const btnLogIn = document.querySelector(".header__entry");
  const modalAuthorization = document.createElement("div");
  modalAuthorization.id = "modal";
  modalAuthorization.className = "modalAuth ";

  const modalContentAuthorization = document.createElement("div");
  modalContentAuthorization.className = "modal-contentAuth ";

  const modalContentUPAuthorization = document.createElement("div");
  modalContentUPAuthorization.className = "modal-content_upAuth ";

  const modalContentMiddleAuthorization = document.createElement("div");
  modalContentMiddleAuthorization.className = "modal-content_middleAuth ";

  const modalContentLowAuthorization = document.createElement("div");
  modalContentLowAuthorization.className = "modal-content_lowAuth ";

  const modalInputTittleAuthorization = document.createElement("div");
  modalInputTittleAuthorization.textContent = "Авторизация";
  modalInputTittleAuthorization.className = "AuthorizationAuth ";

  const closeSpan = document.createElement("span");
  closeSpan.className = "closeAuth ";
  closeSpan.innerHTML = "&times;";

  const modalUserImage = document.createElement("img");
  modalUserImage.src = "./scripts/components/header/authorization/img/user.png";
  modalUserImage.className = "ImageUserAuth ";

  const InputNameAuthorization = document.createElement("input");
  InputNameAuthorization.className = "NameAuth";
  InputNameAuthorization.id = "name";

  const InputLoginAuthorization = document.createElement("input");
  InputLoginAuthorization.className = "LoginAuth";
  InputLoginAuthorization.placeholder = "Логин random";
  InputLoginAuthorization.id = "login";

  const modalButtonConfirmWarning = document.createElement("button");
  modalButtonConfirmWarning.className = "modal-button_confirmAuth";
  modalButtonConfirmWarning.textContent = "Вход";
  modalButtonConfirmWarning.id = "submitAuth";

  modalContentAuthorization.appendChild(modalContentUPAuthorization);
  modalContentAuthorization.appendChild(modalContentMiddleAuthorization);
  modalContentAuthorization.appendChild(modalContentLowAuthorization);
  modalContentMiddleAuthorization.appendChild(modalInputTittleAuthorization);
  modalContentLowAuthorization.appendChild(modalButtonConfirmWarning);
  modalInputTittleAuthorization.appendChild(closeSpan);
  modalContentMiddleAuthorization.appendChild(modalUserImage);
  modalContentMiddleAuthorization.appendChild(InputNameAuthorization);
  modalContentMiddleAuthorization.appendChild(InputLoginAuthorization);
  modalAuthorization.appendChild(modalContentAuthorization);
  document.body.appendChild(modalAuthorization);

  const closeBtn = document.getElementsByClassName("closeAuth")[0];
  const nameOfBoard = document.createElement("div");
  nameOfBoard.classList.add("nameOfBoard");
  const sidebarList = document.getElementsByClassName("sidebar__menu-item")[0];

  ///////////////////////////////////////////////////////////////////////////////////

  btnLogIn.addEventListener("click", function () {
    modalAuthorization.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modalAuthorization.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modalAuthorization) {
      modalAuthorization.style.display = "none";
    }
  });

  let name = document.querySelector(".NameAuth");
  name.placeholder = "group/newUser";
  let login = document.querySelector(".LoginAuth");
  let submit = document.querySelector(".modal-button_confirmAuth");

  let users = {};

  function User(name, login) {
    this.name = name;
    this.login = login;
  }

  function createId(users) {
    return Object.keys(users).length;
  }
  const userName = document.getElementById("sidebarUser");
  const listUser = document.getElementById("sidebar__menu-text");

  console.log(listUser);
  modalButtonConfirmWarning.addEventListener("click", () => {
    modalAuthorization.style.display = "none";
    const nameUser = name.value;
    const loginUser = login.value;
    const user = new User(nameUser, loginUser);
    const userId = "User" + createId(users);
    users[userId] = user;

    if (usersLogin.includes(nameUser)) {
      userName.innerText = nameUser;
      listUser.innerText = nameUser;

      sidebarList.append(nameOfBoard);
      nameOfBoard.innerHTML = boardNames[0];
    } else {
      modalAuthorization.style.display = "none";
      alert("Проверьте правильность ввода данных! Нет данного user");
      return 0;
    }
  });
}
