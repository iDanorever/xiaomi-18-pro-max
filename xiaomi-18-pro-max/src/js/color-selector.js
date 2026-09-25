export function initColorSelector() {
  const device = document.querySelector("#color-device");
  const options = document.querySelectorAll(".color-option");

  if (!device || options.length === 0) return;

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedColor = option.dataset.color;

      if (!selectedColor) return;

      device.style.setProperty("--device-color", selectedColor);

      options.forEach((button) => {
        const isActive = button === option;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    });
  });
}