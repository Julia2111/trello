addEventListener("DOMContentLoaded", sidebar());
export function sidebar() {
  const sidebar = document.getElementById("mySidebar");
  let mini = true;
  const sidebarMenuTexts = document.querySelectorAll(".sidebar__menu-text");
  const imageWrapper = document.querySelector(".sidebar__wrapper");
  console.log(imageWrapper);

  sidebar.addEventListener("mouseover", toggleSidebar);
  sidebar.addEventListener("mouseout", toggleSidebar);

  function toggleSidebar() {
    if (mini) {
      sidebar.style.width = "160px";
      sidebarMenuTexts.forEach((item) => (item.style.display = "block"));

      mini = false;
    } else {
      sidebar.style.width = "70px";
      sidebarMenuTexts.forEach((item) => (item.style.display = "none"));
      mini = true;
    }
  }
}
