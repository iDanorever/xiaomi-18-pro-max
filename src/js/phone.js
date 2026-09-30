import xiaomiRedImg from '../assets/images/xiaomi-18-red.png';

export function phoneMarkup({ id = "", extraClass = "" } = {}) {
  const idAttr = id ? ` id="${id}"` : "";

  return `
    <div class="phone-hud-card">
      <div class="hud-tag top-tag">
        <span class="text-red">OPTIC FILAMENT</span> <span class="tag-divider">|</span> <span>ACTIVE</span>
      </div>

      <div class="phone-render ${extraClass}"${idAttr} data-finish="red" data-view="back">
        <div class="phone-shell">
          <div class="phone-back">
            <img 
              id="phone-image" 
              src="${xiaomiRedImg}" 
              alt="Xiaomi 18 Pro Max Translucent Crimson" 
              class="phone-img-render"
            />
          </div>

          <div class="phone-front" aria-hidden="true">
            <div class="screen">
              <p class="screen-os">HYPEROS 4</p>
              <p class="screen-time">18:00</p>
              <p class="screen-label">XIAOMI 18 PRO MAX</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hud-tag bottom-tag">
        <span class="dot-red"></span> 360° INTERACTIVE VIEW
      </div>
    </div>
  `;
}
