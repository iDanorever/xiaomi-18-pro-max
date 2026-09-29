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
  <header class="navbar">
    <a class="brand" href="#inicio">XIAOMI</a>

    <nav class="navbar-links" aria-label="Navegación principal">
      <a href="#design">Diseño</a>
      <a href="#colors">Colores</a>
    </nav>

    <button class="menu-button" id="menu-button" type="button" aria-expanded="false" aria-controls="nav-menu">
      <span></span>
      <span></span>
    </button>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-content">
        <p class="eyebrow">A NEW ERA BEGINS</p>
        <h1>THE FUTURE<br>IS IN YOUR<br><span>HANDS.</span></h1>
        <p class="subtitle">
          Discover a new perspective.
        </p>

        <div class="hero-actions">
          <a class="explore" href="#design">Explore the experience <span>↗</span></a>
        </div>
      </div>

      <div class="hero-phone phone-render" aria-label="Representación visual del teléfono">
        <div class="phone-shell">
          <div class="camera-module">
            <div class="camera-lens"><span></span></div>
            <div class="camera-lens"><span></span></div>
            <div class="camera-sensor"></div>
          </div>
          <div class="leica-row">
            <span class="mini-lens"></span>
            <span class="flash"></span>
            <strong>LEICA</strong>
            <small>VARIO-SUMMILUX<br>1:1.6-2.5/14-120 ASPH.</small>
          </div>
          <div class="charging-ring"><span>XIAOMI</span></div>
          <div class="phone-circuit circuit-top"></div>
          <div class="phone-circuit circuit-bottom"></div>
          <div class="speaker-grille"></div>
        </div>
      </div>

      <div class="hero-footer">
        <span>01 / THE ARRIVAL</span>
        <a href="#design" style="color: inherit; text-decoration: none;">SCROLL TO DISCOVER ↓</a>
      </div>
    </section>

    <section class="scene scene-dark" id="design" style="position: relative; padding: 80px 6vw;">
      <p class="eyebrow">02 / THE DESIGN</p>
      <h1>Una forma que<br>lo cambia todo.</h1>
      <p class="subtitle">
        Cada curva, cada acabado y cada detalle se unen en una experiencia pensada para destacar.
      </p>

      <div class="design-stage" style="display: flex; align-items: center; justify-content: space-around; margin-top: 40px; flex-wrap: wrap; gap: 40px;">
        <div class="design-device phone-render" aria-hidden="true">
          <div class="phone-shell">
            <div class="camera-module">
              <div class="camera-lens"><span></span></div>
              <div class="camera-lens"><span></span></div>
              <div class="camera-sensor"></div>
            </div>
            <div class="leica-row">
              <span class="mini-lens"></span>
              <span class="flash"></span>
              <strong>LEICA</strong>
              <small>VARIO-SUMMILUX</small>
            </div>
            <div class="charging-ring"><span>XIAOMI</span></div>
            <div class="phone-circuit circuit-top"></div>
            <div class="phone-circuit circuit-bottom"></div>
            <div class="speaker-grille"></div>
          </div>
        </div>

        <div class="design-copy" style="max-width: 400px;">
          <h3 style="font-size: 28px; margin-bottom: 12px;">Hecho para ser visto.</h3>
          <p class="subtitle">
            Una silueta elegante y una presencia que transforma lo cotidiano en algo extraordinario.
          </p>
        </div>
      </div>
    </section>

    <section class="scene" id="colors" style="position: relative; padding: 80px 6vw; text-align: center;">
      <p class="eyebrow">03 / THE COLORS</p>
      <h1>Elige tu color.</h1>
      <p class="subtitle">
        Una misma esencia. Diferentes formas de expresarte.
      </p>

      <div class="color-stage" style="margin-top: 40px;">
        <div class="color-device phone-render" id="color-device" aria-label="Vista del teléfono en el color seleccionado">
          <div class="phone-shell">
            <div class="camera-module">
              <div class="camera-lens"><span></span></div>
              <div class="camera-lens"><span></span></div>
              <div class="camera-sensor"></div>
            </div>
            <div class="leica-row">
              <span class="mini-lens"></span>
              <span class="flash"></span>
              <strong>LEICA</strong>
              <small>VARIO-SUMMILUX</small>
            </div>
            <div class="charging-ring"><span>XIAOMI</span></div>
            <div class="phone-circuit circuit-top"></div>
            <div class="phone-circuit circuit-bottom"></div>
            <div class="speaker-grille"></div>
          </div>
        </div>

        <div class="color-options" aria-label="Seleccionar color del teléfono">
          <button class="color-option active" type="button" style="--swatch: #292929" data-color="#292929" aria-label="Negro" aria-pressed="true"></button>
          <button class="color-option" type="button" style="--swatch: #e9e5dc" data-color="#e9e5dc" aria-label="Blanco" aria-pressed="false"></button>
          <button class="color-option" type="button" style="--swatch: #8b2734" data-color="#8b2734" aria-label="Rojo" aria-pressed="false"></button>
          <button class="color-option" type="button" style="--swatch: #324c78" data-color="#324c78" aria-label="Azul" aria-pressed="false"></button>
        </div>
      </div>
    </section>
  </main>

  <footer class="hero-footer" style="padding: 24px 6vw; border-top: 1px solid #1a1a1a;">
    <span>Concepto visual no oficial.</span>
    <span>XIAOMI 18 PRO MAX</span>
  </footer>
`;

initAnimations();
initScenes();
initColorSelector();

// Efecto 3D de inclinación con el ratón sobre el teléfono principal
const phoneHero = document.querySelector('.hero-phone');
if (phoneHero) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = -(e.clientY / window.innerHeight - 0.5) * 18;
    phoneHero.style.transform = `translateY(-50%) rotate(4deg) rotateY(${x}deg) rotateX(${y}deg)`;
  });
}