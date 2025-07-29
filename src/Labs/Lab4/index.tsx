// Labs/Lab4/index.tsx
import ClickEvent from "./ClickEvent";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import MultipleCounters from "./MultipleCounters";
import EventObject from "./EventOject";
import InputField from "./InputField";
import ReduxCounter from "./ReduxCounter";
import ReduxString from "./ReduxString";
import ReduxToggle from "./ReduxToggle";
import ReduxList from "./ReduxList";
import "./styles.css";

export default function Lab4() {
  return (
    <div className="lab4-container">
      <h1>Lab 4 – Events, State, and Redux</h1>

      <h2>1. Click Event</h2>
      <ClickEvent />
      <hr />

      <h2>2. Toggle Text</h2>
      <ToggleText />
      <hr />

      <h2>3. Counter</h2>
      <Counter />
      <hr />

      <h2>4. Multiple Counters</h2>
      <MultipleCounters />
      <hr />

      <h2>5. Event Object</h2>
      <EventObject />
      <hr />

      <h2>6. Input Field</h2>
      <InputField />
      <hr />

      <h2>7. Redux Counter</h2>
      <ReduxCounter />
      <hr />

      <h2>8. Redux String</h2>
      <ReduxString />
      <hr />

      <h2>9. Redux Toggle</h2>
      <ReduxToggle />
      <hr />

      <h2>10. Redux List</h2>
      <ReduxList />
    </div>
  );
}