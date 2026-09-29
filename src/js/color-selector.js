import gsap from "gsap";

// Importamos directamente tus archivos PNG desde la carpeta de assets
import imgRed from "../assets/images/xiaomi-18-red.png";
import imgBlack from "../assets/images/xiaomi-18-negro.png";
import imgWhite from "../assets/images/xiaomi-18-blanco.png";
import imgPink from "../assets/images/xiaomi-18-rosado.png";
// import imgBlue from "../assets/images/xiaomi-18-azul.png";//
// Diccionario de imágenes e iluminación ambiental
const COLOR_MAP = {
  red: {
    img: imgRed,
    glow: "rgba(160, 12, 20, 0.38)",
  },
  black: {
    img: imgBlack,
    glow: "rgba(80, 80, 90, 0.28)",
  },
  white: {
    img: imgWhite,
    glow: "rgba(220, 210, 190, 0.18)",
  },
  pink: {
    img: imgPink,
    glow: "rgba(180, 60, 90, 0.32)",
  },
  blue: {
    // Cuando generes la versión en azul, importas su imagen y reemplazas imgRed por imgBlue
    img: imgRed, 
    glow: "rgba(40, 80, 140, 0.35)",
  },

};

export function initColorSelector() {
  const options = document.querySelectorAll(".color-option");
  if (!options.length) return;

  options.forEach((option) => {
    option.addEventListener("click", () => {
      // Obtenemos la clave del color desde data-finish o data-color
      const finish = option.dataset.finish || option.dataset.colorKey;
      if (!finish || !COLOR_MAP[finish]) return;

      const targetData = COLOR_MAP[finish];

      // Cambiamos el estado activo en los botones
      options.forEach((btn) => {
        const isActive = btn === option;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
      });

      // Seleccionamos la imagen dentro del teléfono (acepta tanto id como clase)
      const phoneImg = document.querySelector("#phone-image, .phone-img-render");

      if (phoneImg) {
        // Transición fluida con GSAP: Desvanecer -> Cambiar Source -> Revelar con rotación
        gsap.to(phoneImg, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            phoneImg.src = targetData.img;
            gsap.to(phoneImg, { opacity: 1, duration: 0.3 });
          },
        });
      }

      // Animación 3D de reacción en la tarjeta del teléfono
      gsap.fromTo(
        "#hero-phone, .device-motion",
        { rotateY: -15, scale: 0.95 },
        { rotateY: 0, scale: 1, duration: 0.6, ease: "power3.out" }
      );

      // Actualizamos el resplandor de fondo
      document.documentElement.style.setProperty("--scene-glow", targetData.glow);
    });
  });
}
