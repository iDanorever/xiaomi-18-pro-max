import "./css/main.css";
import "./css/animation.css";
import "./css/responsive.css";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { phoneMarkup } from "./js/phone.js";
import { initAnimations } from "./js/animations.js";
import { initScenes, initAudioPlayer } from "./js/scenes.js"; // <-- ¡Unificado aquí para que cargue perfecto!
import { initColorSelector } from "./js/color-selector.js";

// Registrar plugins de GSAP de una sola vez
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

document.querySelector("#app").innerHTML = `
  <a class="skip-link" href="#arrival">Saltar al contenido</a>

  <!-- NAVBAR CON WIDGET DE AUDIO DE STITCH -->
  <header class="navbar">
    <a class="brand" href="#arrival">
      XIAOMI <span class="brand-dot">•</span>
    </a>
    
    <span class="nav-label">18 PRO MAX</span>

    <div class="nav-actions">
      <button class="soundtrack-widget" id="audio-toggle" type="button" aria-label="Toggle Soundtrack">
        <div class="eq-bars">
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
        </div>
        <div class="soundtrack-text">
          <span class="st-title">SOUNDTRACK</span>
          <span class="st-status" id="eq-status">LIVE</span>
        </div>
      </button>

      <button class="menu-button" id="menu-button" type="button" aria-label="Abrir menú de escenas" aria-expanded="false" aria-controls="nav-menu">
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <nav class="nav-menu" id="nav-menu" hidden>
    <a href="#arrival">01 The Arrival</a>
    <a href="#design">02 The Design</a>
    <a href="#colors">03 The Colors</a>
    <a href="#display">04 The Display</a>
    <a href="#camera">05 The Camera</a>
    <a href="#performance">06 The Performance</a>
    <a href="#endurance">07 The Endurance</a>
    <a href="#final">08 The Final Reveal</a>
  </nav>

  <div class="red-line" aria-hidden="true"></div>
  <div class="stage-glow" id="stage-glow" aria-hidden="true"></div>

  <!-- STAGE DEL TELÉFONO CON MARCO HUD DERECHO -->
  <aside class="device-stage" aria-hidden="true">
    <div class="device-motion">
      ${phoneMarkup({ id: "hero-phone", extraClass: "hero-phone" })}
      <div class="energy-wave"></div>
      <div class="explode-stack">
        <div class="explode-layer" data-layer="1"></div>
        <div class="explode-layer" data-layer="2"></div>
        <div class="explode-layer" data-layer="3"></div>
      </div>
    </div>
  </aside>

  <main class="experience">
    <!-- ESCENA 1: HERO / THE ARRIVAL -->
    <section class="scene scene-arrival" id="arrival" data-scene="arrival">
      <div class="scene-copy">
        <p class="eyebrow"><span class="eyebrow-dash">—</span> A NEW ERA BEGINS</p>
        <h1 class="hero-title" aria-label="The future is in your hands.">
          <span class="line">THE FUTURE</span>
          <span class="line">IS IN YOUR</span>
          <span class="line accent letter-line"></span>
        </h1>
        <p class="subtitle">Xiaomi 18 Pro Max. Discover a new perspective.</p>
        
        <div class="hero-actions">
          <a class="explore" href="#design" id="explore-btn">
            <span>EXPLORE THE EXPERIENCE</span>
            <span class="arrow">↗</span>
          </a>
          <div class="sensor-badge">
            <span class="dot-active"></span>
            LEICA VARIO-SUMMICRON 200MP · 1" SENSOR
          </div>
        </div>
      </div>

      <div class="scene-footer">
        <span class="footer-scene-id">01 / THE ARRIVAL</span>
        <div class="footer-specs">
          <span>CHIPSET: SNAPDRAGON 8 GEN 5</span>
          <span class="divider">|</span>
          <span>FINISH: CRIMSON TRANSLUCENT TITANIUM</span>
        </div>
        <a class="scroll-prompt" href="#design">
          SCROLL TO DISCOVER <span class="arrow-down">↓</span>
        </a>
      </div>
    </section>

    <!-- ESCENA 2: THE DESIGN -->
    <section class="scene scene-design" id="design" data-scene="design">
      <div class="scene-copy">
        <p class="eyebrow">02 / THE DESIGN</p>
        <h2>A NEW<br><span>PERSPECTIVE.</span></h2>
        <p class="subtitle">Designed to stand out.<br>Created to be explored.</p>
      </div>
    </section>

    <!-- ESCENA 3: THE COLORS -->
    <section class="scene scene-colors" id="colors" data-scene="colors">
      <div class="scene-copy">
        <p class="eyebrow">03 / THE COLORS</p>
        <h2>ONE DEVICE.<br><span>DIFFERENT WORLDS.</span></h2>
        <p class="subtitle">Cada color cuenta una historia. Elige tu universo.</p>
      </div>
      <div class="color-options" role="group" aria-label="Seleccionar color del teléfono">
        <button class="color-option active" type="button" data-finish="red" aria-pressed="true">
          <span class="swatch swatch-red"></span>
          <span>RED</span>
        </button>
        <button class="color-option" type="button" data-finish="black" aria-pressed="false">
          <span class="swatch swatch-black"></span>
          <span>BLACK</span>
        </button>
        <button class="color-option" type="button" data-finish="white" aria-pressed="false">
          <span class="swatch swatch-white"></span>
          <span>WHITE</span>
        </button>
        <button class="color-option" type="button" data-finish="pink" aria-pressed="false">
          <span class="swatch swatch-pink"></span>
          <span>PINK</span>
        </button>
        <button class="color-option" type="button" data-finish="blue" aria-pressed="false">
          <span class="swatch swatch-blue"></span>
          <span>BLUE</span>
        </button>
      </div>
      <p class="spec-note">Colores preliminares (negro, blanco, rosa, azul y edición roja). Verificar variantes oficiales por región.</p>
    </section>

    <!-- ESCENAS 04 A 08 -->
    <section class="scene scene-display" id="display" data-scene="display">
      <div class="scene-copy">
        <p class="eyebrow">04 / THE DISPLAY</p>
        <h2>EVERY DETAIL.<br><span>IN FULL VIEW.</span></h2>
        <p class="subtitle">Una experiencia visual que te envuelve.</p>
        <ul class="spec-list">
          <li>OLED 6,9″ <small>preliminar</small></li>
          <li>Hasta 120 Hz <small>preliminar</small></li>
          <li>Pantalla trasera OLED 2,9″ <small>preliminar</small></li>
        </ul>
      </div>
    </section>

    <section class="scene scene-camera" id="camera" data-scene="camera">
      <div class="scene-copy">
        <p class="eyebrow">05 / THE CAMERA</p>
        <h2>SEE BEYOND<br><span>THE FRAME.</span></h2>
        <p class="subtitle">Tu mirada. Tu historia. Tu perspectiva.</p>
      </div>
      <div class="camera-samples" aria-hidden="true">
        <figure class="sample sample-a"><span>200 MP</span></figure>
        <figure class="sample sample-b"><span>TELE 200 MP</span></figure>
        <figure class="sample sample-c"><span>ULTRA 50 MP</span></figure>
      </div>
      <p class="spec-note">Módulo preliminar: 200 MP + 200 MP tele + 50 MP UWA. Cotejar con ficha oficial.</p>
    </section>

    <section class="scene scene-performance" id="performance" data-scene="performance">
      <div class="scene-copy">
        <p class="eyebrow">06 / THE PERFORMANCE</p>
        <h2>POWER IN<br><span>EVERY MOVE.</span></h2>
        <p class="subtitle">Cada acción. Cada segundo. Cada detalle.</p>
        <ul class="spec-list">
          <li>Snapdragon 8 Elite Extreme Gen 6 <small>preliminar</small></li>
          <li>HyperOS 4 <small>preliminar</small></li>
        </ul>
      </div>
    </section>

    <section class="scene scene-endurance" id="endurance" data-scene="endurance">
      <div class="scene-copy">
        <p class="eyebrow">07 / THE ENDURANCE</p>
        <h2>BUILT TO<br><span>GO FURTHER.</span></h2>
        <p class="subtitle">Una nueva forma de acompañar cada momento.</p>
        <ul class="spec-list">
          <li>8.500 mAh <small>preliminar</small></li>
          <li>100 W cable / 50 W inalámbrica <small>preliminar</small></li>
          <li>IP66 / IP68 / IP69 <small>preliminar</small></li>
        </ul>
      </div>
    </section>

    <section class="scene scene-final" id="final" data-scene="final">
      <div class="scene-copy scene-copy-center">
        <p class="eyebrow">08 / THE FINAL REVEAL</p>
        <h2>THIS IS THE<br><span>XIAOMI 18 PRO MAX.</span></h2>
        <p class="subtitle">Más que tecnología. Una experiencia para descubrir.</p>
        <a class="explore" href="#specs">VER ESPECIFICACIONES <span>↗</span></a>
      </div>
    </section>

    <section class="scene scene-specs" id="specs" data-scene="specs">
      <div class="scene-copy">
        <p class="eyebrow">SPECS</p>
        <h2>FICHA<br><span>TÉCNICA.</span></h2>
        <p class="subtitle">Datos preliminares a verificar con fuentes oficiales de Xiaomi.</p>
        <table class="spec-table">
          <tbody>
            <tr><th>Pantalla</th><td>OLED 6,9″ · hasta 120 Hz</td></tr>
            <tr><th>Trasera</th><td>OLED 2,9″</td></tr>
            <tr><th>Procesador</th><td>Snapdragon 8 Elite Extreme Gen 6</td></tr>
            <tr><th>Cámaras</th><td>200 MP + 200 MP tele + 50 MP UWA</td></tr>
            <tr><th>Batería</th><td>8.500 mAh · 100 W / 50 W</td></tr>
            <tr><th>Sistema</th><td>HyperOS 4</td></tr>
            <tr><th>Protección</th><td>IP66, IP68, IP69</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
`;

/**
 * Navegación suave con transición de desvanecimiento y caída (Smooth Drop)
 */
function initSmoothDropNavigation() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#" || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      // Cerrar menú móvil si estuviera abierto
      const navMenu = document.querySelector("#nav-menu");
      if (navMenu && !navMenu.hasAttribute("hidden")) {
        navMenu.setAttribute("hidden", "");
      }

      // Animación de Caída + Fade de la interfaz durante el scroll
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: targetElement,
          autoKill: false
        },
        ease: "power3.inOut"
      });

      // Micro-animación de desvanecimiento temporal en la vista al iniciar el salto
      gsap.to(".experience", {
        opacity: 0.8,
        y: -10,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    });
  });
}

function initSceneFading() {
  const scenes = document.querySelectorAll(".scene");

  scenes.forEach((scene) => {
    ScrollTrigger.create({
      trigger: scene,
      start: "top center",   // Cambiado para que active cuando la escena llegue al centro de la pantalla
      end: "bottom center",  // Termine cuando salga del centro
      scrub: true,              
      onUpdate: (self) => {
        const progress = self.progress;
        
        let currentOpacity = 1;
        let currentScale = 1;

        if (progress < 0.2) {
          currentOpacity = gsap.utils.mapRange(0, 0.2, 0.2, 1, progress);
          currentScale = gsap.utils.mapRange(0, 0.2, 0.97, 1, progress);
        } else if (progress > 0.8) {
          currentOpacity = gsap.utils.mapRange(0.8, 1, 1, 0.2, progress);
          currentScale = gsap.utils.mapRange(0.8, 1, 1, 0.97, progress);
        }

        gsap.to(scene, {
          opacity: currentOpacity,
          scale: currentScale,
          overwrite: "auto",
          duration: 0.1
        });
      }
    });
  });
}

// Inicialización de componentes y módulos
initAudioPlayer();
initScenes();
initColorSelector();
initAnimations();
initSmoothDropNavigation();
initSceneFading();
