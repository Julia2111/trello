export function initHeader() {
  console.log("initHeader запустился");
  const header = document.createElement("header");
  header.className = "header";

  const container = document.createElement("div");
  container.className = "container";

  const headerInner = document.createElement("div");
  headerInner.className = "header__inner";

  const logo = document.createElement("h1");
  logo.className = "header__logo";
  logo.textContent = "Trello";

  const headerDiv = document.createElement("div");
  headerDiv.className = "headerDiv";

  const time = document.createElement("div");
  time.className = "header__time";
  time.id = "time";

  const buttons = document.createElement("div");
  buttons.className = "header__buttons";

  const entryButton = document.createElement("button");
  entryButton.className = "header__entry";
  entryButton.innerHTML = '<i class="bx bx-user-circle"></i><span>Войти</span>';

  buttons.appendChild(entryButton);

  headerInner.appendChild(logo);
  headerInner.appendChild(headerDiv);
  headerDiv.appendChild(time);
  headerDiv.appendChild(buttons);

  container.appendChild(headerInner);
  header.appendChild(container);

  document.body.appendChild(header);
}
