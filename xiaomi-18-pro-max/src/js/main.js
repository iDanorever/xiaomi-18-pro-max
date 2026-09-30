import { initScenes } from "./scenes.js";
import { initColorSelector } from "./color-selector.js";
import { initAnimations } from "./animations.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="navbar">
    <a class="navbar-logo" href="#inicio">XIAOMI</a>

    <nav class="navbar-links" aria-label="Navegación principal">
      <a href="#design">Diseño</a>
      <a href="#colors">Colores</a>
    </nav>

    <button class="navbar-button" id="menu-button" type="button"
      aria-expanded="false" aria-controls="nav-menu">
      Explorar
    </button>

    <div class="nav-menu" id="nav-menu" hidden>
      <a href="#inicio">Inicio</a>
      <a href="#design">Diseño</a>
      <a href="#colors">Colores</a>
    </div>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-content">
        <p class="hero-eyebrow">A NEW ERA BEGINS</p>
        <h1>THE FUTURE<br>IS IN YOUR<br><span>HANDS.</span></h1>
        <p class="hero-subtitle">
          Discover a new perspective.
        </p>

        <div class="hero-actions">
          <a class="button-primary" href="#design">Explore the experience</a>
          <a class="button-secondary" href="#colors">View colors</a>
        </div>
      </div>

      <div class="hero-phone phone-render" aria-label="Representación visual del teléfono">
        <div class="phone-shell">
          <div class="camera-module">
            <div class="camera-lens"><span></span></div>
            <div class="camera-lens"><span></span></div>
            <div class="camera-sensor"></div>
          </div>
          <div class="leica-row"><span class="mini-lens"></span><span class="flash"></span><strong>LEICA</strong><small>VARIO-SUMMILUX<br>1:1.6-2.5/14-120 ASPH.</small></div>
          <div class="charging-ring"><span>XIAOMI</span></div>
          <div class="phone-circuit circuit-top"></div>
          <div class="phone-circuit circuit-bottom"></div>
          <div class="speaker-grille"></div>
        </div>
      </div>
    </section>

    <section class="scene scene-dark" id="design">
      <p class="scene-label">Diseño</p>
      <h2>Una forma que<br>lo cambia todo.</h2>
      <p class="scene-description">
        Cada curva, cada acabado y cada detalle se unen en una experiencia
        pensada para destacar.
      </p>

      <div class="design-stage">
        <div class="design-device phone-render" aria-hidden="true">
          <div class="phone-shell">
            <div class="camera-module"><div class="camera-lens"><span></span></div><div class="camera-lens"><span></span></div><div class="camera-sensor"></div></div>
            <div class="leica-row"><span class="mini-lens"></span><span class="flash"></span><strong>LEICA</strong><small>VARIO-SUMMILUX</small></div>
            <div class="charging-ring"><span>XIAOMI</span></div><div class="phone-circuit circuit-top"></div><div class="phone-circuit circuit-bottom"></div><div class="speaker-grille"></div>
          </div>
        </div>

        <div class="design-copy">
          <h3>Hecho para ser visto.</h3>
          <p>
            Una silueta elegante y una presencia que transforma lo cotidiano
            en algo extraordinario.
          </p>
        </div>
      </div>
    </section>

    <section class="scene" id="colors">
      <p class="scene-label">Tu estilo</p>
      <h2>Elige tu color.</h2>
      <p class="scene-description">
        Una misma esencia. Diferentes formas de expresarte.
      </p>

      <div class="color-stage">
        <div class="color-device" id="color-device"
          aria-label="Vista del teléfono en el color seleccionado">
          <div class="phone-shell">
            <div class="camera-module"><div class="camera-lens"><span></span></div><div class="camera-lens"><span></span></div><div class="camera-sensor"></div></div>
            <div class="leica-row"><span class="mini-lens"></span><span class="flash"></span><strong>LEICA</strong><small>VARIO-SUMMILUX</small></div>
            <div class="charging-ring"><span>XIAOMI</span></div><div class="phone-circuit circuit-top"></div><div class="phone-circuit circuit-bottom"></div><div class="speaker-grille"></div>
          </div>
        </div>

        <div class="color-options" aria-label="Seleccionar color del teléfono">
          <button class="color-option active" type="button"
            style="--swatch: #292929" data-color="#292929"
            aria-label="Negro" aria-pressed="true"></button>

          <button class="color-option" type="button"
            style="--swatch: #e9e5dc" data-color="#e9e5dc"
            aria-label="Blanco" aria-pressed="false"></button>

          <button class="color-option" type="button"
            style="--swatch: #8b2734" data-color="#8b2734"
            aria-label="Rojo" aria-pressed="false"></button>

          <button class="color-option" type="button"
            style="--swatch: #324c78" data-color="#324c78"
            aria-label="Azul" aria-pressed="false"></button>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    Concepto visual no oficial. Las características del producto son ilustrativas.
  </footer>
`;

initScenes();
initColorSelector();
initAnimations();