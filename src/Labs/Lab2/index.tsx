// src/Labs/Lab2/index.tsx
import "./index.css";
import { useNavigate } from "react-router-dom";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";

export default function Lab2() {
  const navigate = useNavigate();
  return (
    <div id="wd-lab2">
      {/* ✅ NEW BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-danger mb-4"
      >
        ← Back to Home
      </button>
      <h2>Lab 2 - Cascading Style Sheets</h2>

      {/* ... all previous sections ... */}

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <Corners />
      <Dimensions />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <ReactIconsSampler />
    </div>
  );
}
