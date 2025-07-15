// src/Labs/Lab2/ColorPalette.tsx

import "./styles.css";

export default function ColorPalette() {
  return (
    <div className="color-palette-demo">
      <h2>Color Palette Demo</h2>

      <div className="color-box named-color">Named Color: Blue</div>
      <div className="color-box hex-color">Hex Color: #ff5733</div>
      <div className="color-box rgb-color">RGB Color: rgb(60, 179, 113)</div>
      <div className="color-box rgba-color">RGBA Color: rgba(255, 99, 71, 0.7)</div>
      <div className="color-box contrast-color">Contrast: Dark text on light background</div>
      <div className="color-box inverse-contrast-color">Contrast: Light text on dark background</div>
    </div>
  );
}