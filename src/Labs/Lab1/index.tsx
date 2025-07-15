// src/Labs/Lab1/index.tsx

import ReactDOM from "react-dom/client";

// Headings & Text
import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";

// Lists
import OrderedList from "./OrderedList";
import UnorderedList from "./UnorderedList";
import MyRecipe from "./MyRecipe";
import FavoriteBooks from "./FavoriteBooks";

// Images
import StarshipImage from "./StarshipImage";
import TeslabotImage from "./TeslabotImage";

// Forms: Input Fields
import FirstNameForm from "./FirstNameForm";
import LastNameForm from "./LastNameForm";
import UsernameForm from "./UsernameForm";
import PasswordForm from "./PasswordForm";
import Email from "./Email";
import Salary from "./Salary";
import TextAreaForm from "./TextAreaForm";

// Forms: Buttons & Interactions
import ClickButtonAlert from "./ClickButtonAlert";
import FileUpload from "./FileUpload";

// Forms: Radios
import ComedyRadio from "./ComedyRadio";
import DramaRadio from "./DramaRadio";
import SciFiRadio from "./SciFiRadio";
import FantasyRadio from "./FantasyRadio";

// Forms: Checkboxes
import ComedyCheckbox from "./ComedyCheckbox";
import DramaCheckbox from "./DramaCheckbox";
import SciFiCheckbox from "./SciFiCheckbox";
import FantasyCheckbox from "./FantasyCheckbox";

// Forms: Dropdowns
import SelectOneDropdown from "./SelectOneDropdown";
import SelectManyOptions from "./SelectManyOptions";

// Forms: Others
import RatingSlider from "./RatingSlider";
import DOBDatePicker from "./DOBDatePicker";

// Anchor
import AnchorTag from "./AnchorTag";


const Lab1 = () => {
  return (
    <div style={{ padding: "20px", marginLeft: 220, fontFamily: "Arial, sans-serif" }}>
      <h1>CS5610 - Lab 1 Showcase</h1>

      {/* Text Elements */}
      <HeadingTags />
      <ParagraphTag />

      {/* Lists */}
      <OrderedList />
      <UnorderedList />
      <MyRecipe />
      <FavoriteBooks />

      {/* Images */}
      <StarshipImage />
      <TeslabotImage />

      {/* Input Forms */}
      <FirstNameForm />
      <LastNameForm />
      <UsernameForm />
      <PasswordForm />
      <Email />
      <Salary />
      <TextAreaForm />

      {/* Buttons */}
      <ClickButtonAlert />
      <FileUpload />

      {/* Radio Buttons */}
      <ComedyRadio />
      <DramaRadio />
      <SciFiRadio />
      <FantasyRadio />

      {/* Checkboxes */}
      <ComedyCheckbox />
      <DramaCheckbox />
      <SciFiCheckbox />
      <FantasyCheckbox />

      {/* Dropdowns */}
      <SelectOneDropdown />
      <SelectManyOptions />

      {/* Other Inputs */}
      <RatingSlider />
      <DOBDatePicker />

      {/* Anchor */}
      <AnchorTag />
    </div>
  );
};


export default Lab1;

// Optional: for standalone rendering (if you run index.tsx directly)
if (document.getElementById("root")) {
  ReactDOM.createRoot(document.getElementById("root")!).render(<Lab1 />);
}
