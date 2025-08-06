// src/Labs/Lab4/index.tsx

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

import { Provider } from "react-redux";
import store from "../store";

import "./styles.css";

export default function Lab4() {
  const sayHello = () => {
    alert("Hello");
  };

  return (
    <div className="lab4-container">
      <h1>Lab 4 – Events, State, and Redux</h1>

      <h2>1. Click Event</h2>
      <ClickEvent />
      <hr />

      <h2>2. Passing Data on Event</h2>
      <PassingDataOnEvent />
      <hr />

      <h2>3. Passing Function as Prop</h2>
      <PassingFunctions theFunction={sayHello} />
      <hr />

      <h2>4. Event Object</h2>
      <EventObject />
      <hr />

      <h2>5. Integer State (Counter)</h2>
      <Counter />
      <hr />

      <h2>6. Boolean State</h2>
      <BooleanStateVariables />
      <hr />

      <h2>7. String State</h2>
      <StringStateVariables />
      <hr />

      <h2>8. Date State</h2>
      <DateStateVariable />
      <hr />

      <h2>9. Object State</h2>
      <ObjectStateVariable />
      <hr />

      <h2>10. Array State</h2>
      <ArrayStateVariable />
      <hr />

      <h2>11. Shared State Between Components</h2>
      <ParentStateComponent />
      <hr />

      <h2>12. Redux Examples</h2>
      <Provider store={store}>
        <ReduxExamples />
      </Provider>
    </div>
  );
}
