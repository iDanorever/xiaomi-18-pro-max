export function initScenes() {
  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#nav-menu");

  if (!menuButton || !menu) return;

  function closeMenu() {
    menu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menu.hidden = isOpen;
    menuButton.setAttribute("aria-expanded", String(!isOpen));
  }

  menuButton.addEventListener("click", toggleMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      closeMenu();
    }
  });
}