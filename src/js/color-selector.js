import gsap from "gsap";

const FINISHES = {
  red: {
    body1: "#ff4b48",
    body2: "#c91118",
    body3: "#8b080d",
    body4: "#d72523",
    border: "#9d1115",
    inset: "#590509",
    glow: "rgba(160, 12, 20, 0.38)",
  },
  black: {
    body1: "#3a3a3c",
    body2: "#1c1c1e",
    body3: "#0a0a0a",
    body4: "#2c2c2e",
    border: "#6a6a6a",
    inset: "#111",
    glow: "rgba(80, 80, 90, 0.28)",
  },
  white: {
    body1: "#f4f1ea",
    body2: "#d9d4c8",
    body3: "#b8b2a6",
    body4: "#ece8df",
    border: "#cfc8bb",
    inset: "#8a8478",
    glow: "rgba(220, 210, 190, 0.18)",
  },
  pink: {
    body1: "#f4b6c4",
    body2: "#d46a86",
    body3: "#8a334c",
    body4: "#e58aa0",
    border: "#c45c78",
    inset: "#6a2438",
    glow: "rgba(180, 60, 90, 0.32)",
  },
  blue: {
    body1: "#3d6aa8",
    body2: "#1d3d6e",
    body3: "#0c1f3d",
    body4: "#2a568f",
    border: "#4a7ab8",
    inset: "#0a1830",
    glow: "rgba(40, 80, 140, 0.35)",
  },
};

function applyFinish(device, finish) {
  const palette = FINISHES[finish] || FINISHES.red;
  device.dataset.finish = finish;
  const shell = device.querySelector(".phone-shell");
  if (!shell) return;
  shell.style.setProperty("--body-1", palette.body1);
  shell.style.setProperty("--body-2", palette.body2);
  shell.style.setProperty("--body-3", palette.body3);
  shell.style.setProperty("--body-4", palette.body4);
  shell.style.setProperty("--shell-border", palette.border);
  shell.style.setProperty("--shell-inset", palette.inset);

  document.documentElement.style.setProperty("--scene-glow", palette.glow);
}

export function initColorSelector() {
  const devices = document.querySelectorAll(".phone-render");
  const options = document.querySelectorAll(".color-option");
  if (!devices.length || !options.length) return;

  applyFinish(document.querySelector("#hero-phone"), "red");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const finish = option.dataset.finish;
      if (!finish) return;

      devices.forEach((device) => applyFinish(device, finish));

      options.forEach((button) => {
        const isActive = button === option;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      gsap.fromTo(
        "#hero-phone",
        { rotateY: -18, scale: 0.94 },
        { rotateY: 0, scale: 1, duration: 0.7, ease: "power3.out" }
      );
    });
  });
}
