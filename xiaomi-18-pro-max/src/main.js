import "./css/main.css";
import "./css/animation.css";
import "./css/responsive.css";

import { initAnimations } from "./js/animations.js";
import { initScenes } from "./js/scenes.js";
import { initColorSelector } from "./js/color-selector.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero scene" id="arrival">
      <nav class="navbar">
        <a class="brand" href="#arrival">XIAOMI</a>
        <span class="nav-label">18 PRO MAX</span>
        <button class="menu-button" aria-label="Abrir menú">
          <span></span>
          <span></span>
        </button>
      </nav>

      <div class="hero-content">
        <p class="eyebrow">A NEW ERA BEGINS</p>

        <h1 class="hero-title">
          THE FUTURE<br>
          IS IN YOUR<br>
          <span>HANDS.</span>
        </h1>

        <p class="subtitle">
          Discover a new perspective.
        </p>

        <a class="explore" href="#design">
          EXPLORE THE EXPERIENCE
          <span>↗</span>
        </a>
      </div>

      <div class="phone-placeholder hero-phone">
        <div class="phone-outline">
          <div class="camera camera-one"></div>
          <div class="camera camera-two"></div>
          <div class="camera camera-three"></div>
        </div>
        <span class="placeholder-label">DEVICE RENDER</span>
      </div>

      <div class="hero-footer">
        <span>01 / THE ARRIVAL</span>
        <a href="#design">SCROLL TO DISCOVER ↓</a>
      </div>
    </section>

    <section class="design scene" id="design">
      <p class="eyebrow">02 / THE DESIGN</p>
      <h2 class="scene-title">
        A NEW<br><span>PERSPECTIVE.</span>
      </h2>
      <p class="scene-description">
        Designed to stand out.<br>
        Created to be explored.
      </p>

      <div class="design-device phone-placeholder">
        <div class="phone-outline">
          <div class="camera camera-one"></div>
          <div class="camera camera-two"></div>
          <div class="camera camera-three"></div>
        </div>
        <span class="placeholder-label">DEVICE RENDER</span>
      </div>
    </section>

    <section class="colors scene" id="colors">
      <p class="eyebrow">03 / THE COLORS</p>
      <h2 class="scene-title">
        ONE DEVICE.<br><span>DIFFERENT WORLDS.</span>
      </h2>
      <p class="scene-description">
        Choose your universe.
      </p>

      <div class="color-stage">
        <div class="color-device phone-placeholder" id="color-device">
          <div class="phone-outline">
            <div class="camera camera-one"></div>
            <div class="camera camera-two"></div>
            <div class="camera camera-three"></div>
          </div>
          <span class="placeholder-label">DEVICE RENDER</span>
        </div>
      </div>

      <div class="color-options" aria-label="Seleccionar color">
        <button class="color-option active"
          data-color="red" aria-label="Rojo"
          aria-pressed="true">
          <span class="color-swatch swatch-red"></span>
          <span>RED</span>
        </button>

        <button class="color-option"
          data-color="black" aria-label="Negro"
          aria-pressed="false">
          <span class="color-swatch swatch-black"></span>
          <span>BLACK</span>
        </button>

        <button class="color-option"
          data-color="white" aria-label="Blanco"
          aria-pressed="false">
          <span class="color-swatch swatch-white"></span>
          <span>WHITE</span>
        </button>

        <button class="color-option"
          data-color="blue" aria-label="Azul"
          aria-pressed="false">
          <span class="color-swatch swatch-blue"></span>
          <span>BLUE</span>
        </button>
      </div>
      <p class="color-note">
        Colores provisionales para probar la interacción.
      </p>
    </section>
  </main>
`;

initAnimations();
initScenes();
initColorSelector();