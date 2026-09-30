import backgroundMusic from "../assets/audio/soundtrack.mp3";

export function initScenes() {
  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#nav-menu");

  // --- 1. CONTROL DE MENÚ NAVEGACIÓN ---
  if (menuButton && menu) {
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
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
      }
    });
  }

  // --- 2. OBSERVER DE ESCENAS (Sincroniza data-scene en <body>) ---
  const scenes = document.querySelectorAll(".scene");
  
  if (scenes.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sceneName = entry.target.getAttribute("data-scene");
            // Sincroniza el body para que el CSS determine la visibilidad del teléfono
            document.body.setAttribute("data-scene", sceneName);
          }
        });
      },
      {
        threshold: 0.45 // Se activa cuando casi la mitad de la escena está visible
      }
    );

    scenes.forEach((scene) => observer.observe(scene));
  }
}

export function initAudioPlayer() {
  const audioBtn = document.querySelector("#audio-toggle");
  const eqStatus = document.querySelector("#eq-status");
  const eqBars = document.querySelectorAll(".eq-bar");

  if (!audioBtn) return;

  const audio = new Audio(backgroundMusic);
  audio.loop = true;
  audio.volume = 0.06; // 6% de volumen de fondo

  let isPlaying = false;

  // Actualizador universal de la interfaz
  function setAudioState(active) {
    isPlaying = active;
    if (active) {
      if (eqStatus) eqStatus.textContent = "LIVE";
      audioBtn.classList.remove("is-muted");
      eqBars.forEach((bar) => (bar.style.animationPlayState = "running"));
    } else {
      if (eqStatus) eqStatus.textContent = "MUTED";
      audioBtn.classList.add("is-muted");
      eqBars.forEach((bar) => (bar.style.animationPlayState = "paused"));
    }
  }

  // Estado inicial limpio
  setAudioState(false);

  function startAudio() {
    if (isPlaying) return;
    audio
      .play()
      .then(() => {
        setAudioState(true);
        cleanListeners();
      })
      .catch((err) => {
        console.warn("Autoplay prevenido por el navegador:", err);
      });
  }

  function cleanListeners() {
    window.removeEventListener("pointerdown", startAudio);
    window.removeEventListener("keydown", startAudio);
  }

  // Escuchamos la primera interacción real (clic o tecla)
  window.addEventListener("pointerdown", startAudio, { once: true });
  window.addEventListener("keydown", startAudio, { once: true });

  // Control manual directo del botón
  audioBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cleanListeners();

    if (isPlaying) {
      audio.pause();
      setAudioState(false);
    } else {
      startAudio();
    }
  });
}
