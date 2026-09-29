import xiaomiRedImg from '../assets/images/xiaomi-18-red.png';

export function phoneMarkup({ id = "", extraClass = "" } = {}) {
  const idAttr = id ? ` id="${id}"` : "";

  return `
    <div class="phone-render ${extraClass}"${idAttr} data-finish="red" data-view="back">
      <div class="phone-shell">
        <!-- Reemplazamos los divs del chasis por la imagen fotorrealista -->
        <div class="phone-back">
          <img 
            id="phone-image" 
            src="${xiaomiRedImg}" 
            alt="Xiaomi 18 Pro Max" 
            class="phone-img-render"
          />
        </div>

        <!-- Conservamos la pantalla frontal para cuando el teléfono gire en 3D -->
        <div class="phone-front" aria-hidden="true">
          <div class="screen">
            <p class="screen-os">HYPEROS 4</p>
            <p class="screen-time">18:00</p>
            <p class="screen-label">XIAOMI 18 PRO MAX</p>
          </div>
        </div>
      </div>
    </div>
  `;
}