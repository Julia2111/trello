function initCard() {
  function createCustomElement(tag, className, id) {
    const element = document.createElement(tag);
    element.className = className;
    if (id) {
      element.id = id;
    }
    return element;
  }

  function createNewCard(title, description, id, user) {
    let currentTime = new Date().toLocaleTimeString();
    const newTask = {
      title: title,
      description: description,
      id: id,
      user: user,
      time: currentTime,
    };
    tasks.push(newTask);

    //<div class="cards__item cards__item--todo" draggable="true">
    const cardItem = createCustomElement(
      "div",
      "cards__item cards__item--todo"
    );
    cardItem.setAttribute("draggable", "true");

    //<div class="cards__title">
    const cardTitle = createCustomElement("div", "cards__title");

    //<span class="cards__title-text">Title</span>
    const cardTitleText = createCustomElement("span", "cards__title-text");
    cardTitleText.innerText = newTask.title;

    //<div class="cards__title-buttons">
    const cardTitleButtons = createCustomElement("div", "cards__title-buttons");

    //<button class="cards__title-button" id="todoEditBtn">EDIT</button>
    const todoEditBtn = createCustomElement(
      "button",
      "cards__title-button",
      "todoEditBtn"
    );
    todoEditBtn.innerText = "EDIT";

    //<button class="cards__title-button" id="todoDeleteBtn">DELETE</button>
    const todoDeleteBtn = createCustomElement(
      "button",
      "cards__title-button",
      "todoDeleteBtn"
    );
    todoDeleteBtn.innerText = "DELETE";

    //<div class="cards__desc">
    const cardDesc = createCustomElement("div", "cards__desc");

    //<span class="cards__desc-text">Description</span>
    const cardDescText = createCustomElement("span", "cards__desc-text");
    cardDescText.innerText = newTask.description;

    //<button class="cards__desc-btn">></button>
    const cardDescButton = createCustomElement("button", "cards__desc-btn");
    cardDescButton.innerText = ">";

    //<div class="cards__info">
    const cardInfo = createCustomElement("div", "cards__info");

    //<span class="cards__user">user</span>
    const cardUser = createCustomElement("span", "cards__user");
    cardUser.innerText = user;

    //<span class="cards__time">10:32</span>
    const cardTime = createCustomElement("span", "cards__time");
    cardTime.innerText = newTask.time;

    cardInfo.append(cardUser, cardTime);
    cardDesc.append(cardDescText, cardDescButton);
    cardTitleButtons.append(todoEditBtn, todoDeleteBtn);
    cardTitle.append(cardTitleText, cardTitleButtons);
    cardItem.append(cardTitle, cardDesc, cardInfo);

    return cardItem;
    /*  cardBody.append(cardItem); */

    /* if (cardItem.closest(".cards__col").classList.contains("cards__col--todo")) {
  } */
  }
}
