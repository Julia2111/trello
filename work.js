export const root = document.getElementById("root");
export const header = createHeader();
export const main = createMain();

root.append(header, main);

function createHeader() {
  const container = document.createElement("div");
  container.classList.add("container");

  const header = document.createElement("div");
  header.classList.add("header");

  const header__inner = document.createElement("div");
  header__inner.classList.add("header__inner");

  const header__logo = document.createElement("h1");
  header__logo.classList.add("header__logo");
  header__logo.innerHTML += "Trello";

  const header__time = document.createElement("div");
  header__time.classList.add("header__time");
  header__time.id = "time";

  const header__buttons = document.createElement("div");
  header__buttons.classList.add("header__buttons");

  const header__join = document.createElement("button");
  header__join.classList.add("header__join");

  const span = document.createElement("div");
  span.id = "time";

  const header__entry = document.createElement("button");
  header__entry.classList.add("header__entry");

  const bx_user_circle = document.createElement("i");
  bx_user_circle.classList.add("bx", "bx-user-circle");

  const entry__span = document.createElement("span");
  entry__span.innerHTML += "Войти";

  header.append(header__inner);
  header__inner.append(header__logo);
  header__inner.append(header__time);
  header__inner.append(header__buttons);
  header__buttons.append(header__time);
  header__buttons.append(header__entry);
  header__entry.append(bx_user_circle);
  bx_user_circle.append(entry__span);

  return header;
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.id = "mySidebar";

  const sidebarUser = document.createElement("div");
  sidebarUser.classList.add("sidebar__user");

  const sidebarWrapper = document.createElement("div");
  sidebarWrapper.classList.add("sidebar__wrapper");

  const sidebarUserImg = document.createElement("img"); //photo будет меняться??
  sidebarUserImg.classList.add("sidebar__user-img");
  sidebarUserImg.src = "img/user.png";

  const spanSidebar = document.createElement("span");
  spanSidebar.classList.add("sidebar__user-name");

  const sidebarMenu = document.createElement("nav");
  sidebarMenu.classList.add("sidebar__menu");

  const sidebarMenuList = document.createElement("ul");
  sidebarMenuList.classList.add("sidebar__menu-list");

  const sidebarMenuItem = document.createElement("li");
  sidebarMenuItem.classList.add("sidebar__menu-item");

  const sidebarMenuLink = document.createElement("a");
  sidebarMenuLink.classList.add("sidebar__menu-link");

  const bxBxsGrid = document.createElement("i");
  bxBxsGrid.classList.add("bx", "bxs-grid");

  const spanSidebarText = document.createElement("span");
  spanSidebarText.classList.add("sidebar__menu-text");
  spanSidebarText.innerHTML += "workspace";

  const sidebarMenuItem2 = document.createElement("li");
  sidebarMenuItem2.classList.add("sidebar__menu-item");

  const sidebarMenuLink2 = document.createElement("a");
  sidebarMenuLink2.classList.add("sidebar__menu-link");

  const bxBxsGroup = document.createElement("i");
  bxBxsGroup.classList.add("bx", "bxs-group");

  const spanSidebarUsers = document.createElement("span");
  spanSidebarUsers.classList.add("sidebar__menu-text");
  spanSidebarUsers.innerHTML += "users";

  const infoWorkspace = document.createElement("li");
  infoWorkspace.classList.add("sidebar__menu-item");

  const containerCards = document.createElement("div");
  containerCards.classList.add("container");

  const cards = document.createElement("div");
  cards.classList.add("cards");

  const cardsCol = document.createElement("div");
  cardsCol.classList.add("cards__col", "cards__col--todo");

  const cardsHeader = document.createElement("div");
  cardsHeader.classList.add("cards__header", "cards__header--todo");

  const cardsTitle = document.createElement("h3");
  cardsTitle.classList.add("cards__title");

  const cardsCounterToDo = document.createElement("span");
  cardsCounterToDo.classList.add("cards__counter");
  cardsCounterToDo.id = "toDoCounter";

  const cardsBody = document.createElement("div");
  cardsBody.classList.add("cards__body");

  const cardsItemToDO = document.createElement("div");
  cardsItemToDO.classList.add("cards__item", "cards__item--todo");

  const cardsBodyTitleToDo = document.createElement("div");
  cardsBodyTitleToDo.classList.add("cards__title");

  const cardsTitleTextTD = document.createElement("span");
  cardsTitleTextTD.classList.add("cards__title-text");

  const cardsTitleButtonsTD = document.createElement("div");
  cardsTitleButtonsTD.classList.add("cards__title-buttons");

  const cardsTitleBtEditTd = document.createElement("button");
  cardsTitleBtEditTd.classList.add("cards__title-button");

  const cardsTitleBtDlt = document.createElement("button");
  cardsTitleBtDlt.classList.add("cards__title-button");

  const cardsDescToDo = document.createElement("div");
  cardsDescToDo.classList.add("cards__desc");

  const cardsDescTextTD = document.createElement("span");
  cardsDescTextTD.classList.add("cards__desc-text");

  const cardsDescBtnTD = document.createElement("button");
  cardsDescBtnTD.classList.add("cards__desc-btn");

  const cardsInfoTD = document.createElement("div");
  cardsInfoTD.classList.add("cards__info");

  const cardsUserTD = document.createElement("div");
  cardsUserTD.classList.add("cards__user");

  const cardsTimeTD = document.createElement("div");
  cardsTimeTD.classList.add("cards__time");

  const cardsBtnAddTD = document.createElement("button");
  cardsBtnAddTD.classList.add("cards__btn", "cards__btn--todo");
  cardsBtnAddTD.id = "addTodo";

  const cardsColInPr = document.createElement("div");
  cardsColInPr.classList.add("cards__col", "cards__col--inProgress");

  const cardsHeaderInPr = document.createElement("div");
  cardsHeaderInPr.classList.add("cards__header", "cards__header--inProgress");

  const cardsTitleInPr = document.createElement("h3");
  cardsTitleInPr.classList.add("cards__title");
  cardsTitleInPr.innerHTML += "In Progress";

  const cardsCounterInPr = document.createElement("span");
  cardsCounterInPr.classList.add("cards__counter");
  cardsCounterInPr.id = "inProgressCounter";
  cardsCounterInPr.innerHTML += "1";

  const cardsBodyInPr = document.createElement("div");
  cardsBodyInPr.classList.add("cards__body");

  const cardsItemInPr = document.createElement("div");
  cardsItemInPr.classList.add("cards__item", "cards__item--inProgress");

  const cardsTitleDivInPr = document.createElement("div");
  cardsTitleDivInPr.classList.add("cards__title");

  const cardsTitleBodyInPr = document.createElement("span");
  cardsTitleBodyInPr.classList.add("cards__title-text");
  cardsTitleBodyInPr.innerHTML += "Title";

  const cardsButtonsInPr = document.createElement("div");
  cardsButtonsInPr.classList.add("cards__title-buttons");

  const InPrBtnBack = document.createElement("button");
  InPrBtnBack.classList.add("cards__title-button");
  InPrBtnBack.id = "backBtn";
  InPrBtnBack.innerHTML += "Back";

  const InPrBtnBackComplete = document.createElement("button");
  InPrBtnBackComplete.classList.add("cards__title-button");
  InPrBtnBackComplete.id = "completeBtn";
  InPrBtnBackComplete.innerHTML += "Complete";

  const cardsDescInPr = document.createElement("div");
  cardsDescInPr.classList.add("cards__desc");

  const inPrDescText = document.createElement("span");
  inPrDescText.classList.add("cards__desc-text");
  inPrDescText.innerHTML += "DESCRIPTION";

  const infoInPr = document.createElement("div");
  infoInPr.classList.add("cards__info");

  const cardsUserInPr = document.createElement("span");
  cardsUserInPr.classList.add("cards__user");
  cardsUserInPr.innerHTML += "User";

  const cardsTimeInPr = document.createElement("span");
  cardsTimeInPr.classList.add("cards__time");
  cardsTimeInPr.innerHTML += "Time";

  const cardsColDone = document.createElement("div");
  cardsColDone.classList.add("cards__col", "cards__col--done");

  const cardsHeaderDone = document.createElement("div");
  cardsHeaderDone.classList.add("cards__header", "cards__header--done");

  const cardsTitleDone = document.createElement("h3");
  cardsTitleDone.classList.add("cards__title");
  cardsTitleDone.innerHTML += "Donebvv`:";

  const cardsCounterDone = document.createElement("span");
  cardsCounterDone.classList.add("cards__counter");
  cardsCounterDone.id = "doneCounter";
  cardsCounterDone.innerHTML += "1";

  const cardsBodyDone = document.createElement("div");
  cardsBodyDone.classList.add("cards__body");

  const cardsItemDone = document.createElement("div");
  cardsItemDone.classList.add("cards__item", "cards__item--done");

  const cardsTitleDivDone = document.createElement("div");
  cardsTitleDivDone.classList.add("cards__title");

  const cardsTitleBodyDone = document.createElement("span");
  cardsTitleBodyDone.classList.add("cards__title-text");
  cardsTitleBodyDone.innerHTML += "Title";

  const cardsButtonsDone = document.createElement("div");
  cardsButtonsDone.classList.add("cards__title-buttons");

  const cardsBtnDelDone = document.createElement("button");
  cardsBtnDelDone.classList.add("cards__title-button");
  cardsBtnDelDone.id = "delteBrn";
  cardsBtnDelDone.innerHTML += "DELETE";

  const cardsDescDone = document.createElement("div");
  cardsDescDone.classList.add("cards__desc");

  const doneDescText = document.createElement("span");
  doneDescText.classList.add("cards__desc-text");
  doneDescText.innerHTML += "Description";

  const doneInfo = document.createElement("div");
  doneInfo.classList.add("cards__info");

  const cardsUserDone = document.createElement("span");
  cardsUserDone.classList.add("cards__user");
  cardsUserDone.innerHTML += "user";

  const cardsTimeDone = document.createElement("span");
  cardsTimeDone.classList.add("cards__time");
  cardsTimeDone.innerHTML += "TIME";

  const cardsBtnDeleteDone = document.createElement("button");
  cardsBtnDeleteDone.classList.add("cards__btn", "cards__btn--done");
  cardsBtnDeleteDone.id = "deleteAll";
  cardsBtnDeleteDone.innerHTML += "Delete All";

  root.append(main);
  main.append(sidebar);
  sidebar.append(sidebarUser);
  sidebarUser.append(sidebarWrapper);
  sidebarWrapper.append(sidebarUserImg);

  sidebarUser.append(spanSidebar);
  spanSidebar.innerHTML += "User";
  sidebar.append(sidebarMenu);
  sidebarMenu.append(sidebarMenuList);
  sidebarMenuList.append(sidebarMenuItem);
  sidebarMenuItem.append(sidebarMenuLink);
  sidebarMenuLink.append(bxBxsGrid);
  sidebarMenuLink.append(spanSidebarText);
  sidebarMenuList.append(sidebarMenuItem2);
  sidebarMenuItem2.append(sidebarMenuLink2);
  sidebarMenuLink2.append(bxBxsGroup);
  sidebarMenuLink2.append(spanSidebarUsers);
  main.append(containerCards);
  containerCards.append(cards);
  cards.append(cardsCol);
  cardsCol.append(cardsHeader);
  cardsHeader.append(cardsTitle);
  cardsTitle.innerHTML += "TODO";
  cardsHeader.append(cardsCounterToDo);
  cardsCol.append(cardsBody);
  cardsBody.append(cardsItemToDO);
  cardsItemToDO.append(cardsBodyTitleToDo);
  cardsBodyTitleToDo.append(cardsTitleTextTD);
  cardsTitleTextTD.innerHTML += "Title";
  cardsBodyTitleToDo.append(cardsTitleButtonsTD);
  cardsTitleButtonsTD.append(cardsTitleBtEditTd);
  cardsTitleBtEditTd.id = "toDoEditBtn";
  cardsTitleBtEditTd.innerHTML += "EDIT";

  cardsTitleButtonsTD.append(cardsTitleBtDlt);
  cardsTitleBtDlt.id = "toDoDeleteBtn";
  cardsTitleBtDlt.innerHTML += "DELETE";

  cardsItemToDO.append(cardsDescToDo);
  cardsDescToDo.append(cardsDescTextTD);
  cardsDescTextTD.innerHTML += "Description";
  cardsDescToDo.append(cardsDescBtnTD);
  cardsDescBtnTD.innerHTML += ">";

  cardsItemToDO.append(cardsInfoTD);
  cardsInfoTD.append(cardsUserTD);
  cardsUserTD.innerHTML += "User";
  cardsInfoTD.append(cardsTimeTD);
  cardsTimeTD.innerHTML += "TIME";

  cardsCol.append(cardsBtnAddTD);
  cardsBtnAddTD.innerHTML += "+ Add todo";

  cards.append(cardsColInPr);
  cardsColInPr.append(cardsHeaderInPr);
  cardsHeaderInPr.append(cardsTitleInPr);
  cardsHeaderInPr.append(cardsCounterInPr);
  cardsColInPr.append(cardsBodyInPr);
  cardsBodyInPr.append(cardsItemInPr);
  cardsItemInPr.append(cardsTitleDivInPr);
  cardsTitleDivInPr.append(cardsTitleBodyInPr);
  cardsTitleDivInPr.append(cardsButtonsInPr);
  cardsButtonsInPr.append(InPrBtnBack);
  cardsButtonsInPr.append(InPrBtnBackComplete);

  cardsItemInPr.append(cardsDescInPr);
  cardsDescInPr.append(inPrDescText);

  cardsItemInPr.append(infoInPr);
  infoInPr.append(cardsUserInPr);
  infoInPr.append(cardsTimeInPr);

  cards.append(cardsColDone);
  cardsColDone.append(cardsHeaderDone);
  cardsHeaderDone.append(cardsTitleDone);
  cardsHeaderDone.append(cardsCounterDone);

  cardsColDone.append(cardsBodyDone);
  cardsBodyDone.append(cardsItemDone);
  cardsItemDone.append(cardsTitleDivDone);
  cardsTitleDivDone.append(cardsTitleBodyDone);
  cardsTitleDivDone.append(cardsButtonsDone);
  cardsButtonsDone.append(cardsBtnDelDone);

  cardsItemDone.append(cardsDescDone);
  cardsDescDone.append(doneDescText);

  cardsItemDone.append(doneInfo);
  doneInfo.append(cardsUserDone);
  doneInfo.append(cardsTimeDone);

  cardsColDone.append(cardsBtnDeleteDone);

  return main;
}
