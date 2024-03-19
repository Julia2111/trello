function createCustomElement(tag, className, id) {
  const element = document.createElement(tag);
  element.className = className;
  element.id = id;
  return element;
}

// функция для создания колонки
function createColumn(
  columnClassName,
  columnTitle,
  headerClassName,
  counterId,
  buttonClassName,
  buttonId,
  cardBodyId
) {
  const column = createCustomElement("div", columnClassName);
  const cardBody = createCustomElement("div", "cards__body", cardBodyId);
  const cardHeader = createCustomElement("div", headerClassName);

  const cardTitle = createCustomElement("h3", "cards__title");
  cardTitle.innerText = columnTitle;

  const cardCounter = createCustomElement("span", "cards__counter");
  cardCounter.id = counterId;
  cardCounter.innerText = "";

  const button = createCustomElement("button", buttonClassName);
  button.id = buttonId;

  cardHeader.append(cardTitle, cardCounter);
  column.append(cardHeader, cardBody);
  if (columnClassName.includes("todo")) {
    button.innerText = "+ Add todo";
    column.append(button);
  } else if (columnClassName.includes("done")) {
    button.innerText = "Delete all";
    column.append(button);
  }
  return column;
}

export const columnTodo = createColumn(
  "cards__col cards__col--todo",
  "TODO",
  "cards__header cards__header--todo",
  "toDoCounter",
  "cards__btn cards__btn--todo",
  "addTodo",
  "cardBodyTodo"
);

export const columnInProgress = createColumn(
  "cards__col cards__col--inProgress",
  "IN PROGRESS:",
  "cards__header cards__header--inProgress",
  "inProgressCounter",
  null,
  null,
  "cardBodyInProgress"
);

export const columnDone = createColumn(
  "cards__col cards__col--done",
  "DONE:",
  "cards__header cards__header--done",
  "doneCounter",
  "cards__btn cards__btn--done",
  "deleteAll",
  "cardBodyDone"
);

export function initMain() {
  console.log("initMain запустился");
  const main = document.createElement("main");
  main.className = "main";

  const container = document.createElement("div");
  container.className = "container";

  // сайдбар
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  sidebar.id = "mySidebar";

  const userWrapper = document.createElement("div");
  userWrapper.className = "sidebar__user";

  const sidebarUserWrapper = document.createElement("div");
  sidebarUserWrapper.className = "sidebar__user-wrapper";

  const userImage = document.createElement("img");
  userImage.className = "sidebar__user-img";
  userImage.src = "./img/user.png";
  userImage.setAttribute("width", "40");
  userImage.alt = "user";

  const userName = document.createElement("span");
  userName.className = "sidebar__user-name";
  userName.textContent = "User";
  userName.id = "sidebarUser";

  sidebarUserWrapper.appendChild(userImage);
  userWrapper.appendChild(sidebarUserWrapper);
  userWrapper.appendChild(userName);

  const menu = document.createElement("nav");
  menu.className = "sidebar__menu";

  const menuList = document.createElement("ul");
  menuList.className = "sidebar__menu-list";

  const menuItems = [
    { icon: "bxs-dashboard", text: "boards" },
    { icon: "bxs-group", text: "users" },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.className = "sidebar__menu-item";
    const menuLink = document.createElement("a");
    menuLink.className = "sidebar__menu-link";
    menuLink.href = "#";
    const icon = document.createElement("i");
    icon.className = `bx ${item.icon}`;
    const menuText = document.createElement("span");
    menuText.className = "sidebar__menu-text";
    menuText.textContent = item.text;

    if (item.text === "users") {
      icon.className = "bx bxs-group"; // Иконка для пользователей
      menuText.id = "sidebar__menu-text"; // ID для стилизации
    }

    menuLink.appendChild(icon);
    menuLink.appendChild(menuText);
    menuItem.appendChild(menuLink);
    menuList.appendChild(menuItem);
  });

  menu.appendChild(menuList);
  sidebar.appendChild(userWrapper);
  sidebar.appendChild(menu);

  //контейнер для колонок

  const cards = document.createElement("div");
  cards.className = "cards";

  //функция для создания элемента
  function createCustomElement(tag, className, id) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  cards.append(columnTodo, columnInProgress, columnDone);
  container.append(cards);
  main.append(sidebar, container);
  document.body.appendChild(main);
}
