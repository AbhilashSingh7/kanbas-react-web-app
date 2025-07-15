import ReactDOM from "react-dom/client";
import "./styles.css";

// Lab 2 Sections
import SelectorsShowcase from "./SelectorsShowcase";
import TypographyDemo from "./TypographyDemo";
import ColorPalette from "./ColorPalette";
import BoxModelDemo from "./BoxModelDemo";
import PositioningDemo from "./PositioningDemo";
import FlexboxDemo from "./FelxboxDemo";
import GridDemo from "./GridDemo";
import BootstrapUtilities from "./BootstrapUtilities";
import ResponsiveLayout from "./ResponsiveLayout";

const Lab2 = () => {
  return (
    <div className="lab2-container">
      <h1>CS5610 – Lab 2 Showcase: CSS and Bootstrap</h1>

      {/* Section 1: Selectors */}
      <section>
        <h2>1. Selectors (ID & Class)</h2>
        <SelectorsShowcase />
      </section>

      <hr />

      {/* Section 2: Typography */}
      <section>
        <h2>2. Typography Demo</h2>
        <TypographyDemo />
      </section>

      <hr />

      {/* Section 3: Colors */}
      <section>
        <h2>3. Color Palette</h2>
        <ColorPalette />
      </section>

      <hr />

      {/* Section 4: Box Model */}
      <section>
        <h2>4. Box Model Demo</h2>
        <BoxModelDemo />
      </section>

      <hr />

      {/* Section 5: Positioning */}
      <section>
        <h2>5. Positioning Demo</h2>
        <PositioningDemo />
      </section>

      <hr />

      {/* Section 6: Flexbox */}
      <section>
        <h2>6. Flexbox Layout</h2>
        <FlexboxDemo />
      </section>

      <hr />

      {/* Section 7: Grid */}
      <section>
        <h2>7. Grid Layout</h2>
        <GridDemo />
      </section>

      <hr />

      {/* Section 8: Bootstrap Utilities */}
      <section>
        <h2>8. Bootstrap Utilities</h2>
        <BootstrapUtilities />
      </section>

      <hr />

      {/* Section 9: Responsive Design */}
      <section>
        <h2>9. Responsive Layout</h2>
        <ResponsiveLayout />
      </section>
    </div>
  );
};

export default Lab2;

// Optional: Enable this if you're running index.tsx standalone
if (document.getElementById("root")) {
  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(<Lab2 />);
}