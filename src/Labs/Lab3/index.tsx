import ReactDOM from "react-dom/client";
import "./styles.css";

// Lab 3 Sections
import VariablesAndConstants from "./VariableAndConstants";
import Functions from "./Functions";
import ParametersAndReturns from "./ParametersAndReturns";
import FunctionArrays from "./FunctionArrays";
import TemplateLiterals from "./TemplateLiterals";
import BooleanLogic from "./BooleanLogic";
import WorkingWithObjects from "./WorkingWithObjects";
import Destructuring from "./Destructuring";
import SpreadOperator from "./SpreadOperator";
import Arrays from "./Arrays";
import ArrayMap from "./ArrayMap";
import ArrayFilter from "./ArrayFilter";
import ArrayFind from "./ArrayFind";
import ArrayIndexFind from "./ArrayIndexFind";
import ArraySort from "./ArraySort";
import ArrayJoinSplit from "./ArrayJoinSplit";
import ArraySliceSplice from "./ArraySliceSplice";
import ArrayEverySome from "./ArrayEverySome";
import ArrowFunctions from "./ArrowFunction";
import FunctionHoisting from "./FunctionHoisting";
import ShortCircuiting from "./ShortCircuiting";
import NullishCoalescing from "./NullishCoalescing";
import OptionalChaining from "./OptionalChaining";
import TypeConversion from "./TypeConversation";
import Loops from "./Loops";
import SwitchStatements from "./SwitchStatements";
import TruthyFalsy from "./TruthyFalsy";
import CallbackFunctions from "./CallbackFunction";
import FunctionDefaultParams from "./FunctionDefaultParams";
import RestParameters from "./RestParameters";
import ArrayReduce from "./ArrayReduce";
import ChainingMethods from "./ChainingMethods";
import MathFunctions from "./MathFunction";
import DateAndTime from "./DateAndTime";
import SetAndMap from "./SetAndMap";
import JSONOperations from "./JSONOperations";
import LocalVariables from "./LocalVariables";
import GlobalScope from "./GlobalScope";

const Lab3 = () => {
  return (
    <div className="lab2-container">
      <h1>CS5610 – Lab 3: JavaScript Logic</h1>

      <section>
        <h2>1. Variables and Constants</h2>
        <VariablesAndConstants />
      </section>
      <hr />

      <section>
        <h2>2. Functions</h2>
        <Functions />
      </section>
      <hr />

      <section>
        <h2>3. Parameters and Return Types</h2>
        <ParametersAndReturns />
      </section>
      <hr />

      <section>
        <h2>4. Functions with Arrays</h2>
        <FunctionArrays />
      </section>
      <hr />

      <section>
        <h2>5. Template Literals</h2>
        <TemplateLiterals />
      </section>
      <hr />

      <section>
        <h2>6. Boolean Logic</h2>
        <BooleanLogic />
      </section>
      <hr />

      <section>
        <h2>7. Working with Objects</h2>
        <WorkingWithObjects />
      </section>
      <hr />

      <section>
        <h2>8. Destructuring</h2>
        <Destructuring />
      </section>
      <hr />

      <section>
        <h2>9. Spread Operator</h2>
        <SpreadOperator />
      </section>
      <hr />

      <section>
        <h2>10. Arrays</h2>
        <Arrays />
      </section>
      <hr />

      <section>
        <h2>11. Array Map</h2>
        <ArrayMap />
      </section>
      <hr />

      <section>
        <h2>12. Array Filter</h2>
        <ArrayFilter />
      </section>
      <hr />

      <section>
        <h2>13. Array Find</h2>
        <ArrayFind />
      </section>
      <hr />

      <section>
        <h2>14. Array Index & Find</h2>
        <ArrayIndexFind />
      </section>
      <hr />

      <section>
        <h2>15. Array Sort</h2>
        <ArraySort />
      </section>
      <hr />

      <section>
        <h2>16. Array Join & Split</h2>
        <ArrayJoinSplit />
      </section>
      <hr />

      <section>
        <h2>17. Array Slice & Splice</h2>
        <ArraySliceSplice />
      </section>
      <hr />

      <section>
        <h2>18. Array Every & Some</h2>
        <ArrayEverySome />
      </section>
      <hr />

      <section>
        <h2>19. Arrow Functions</h2>
        <ArrowFunctions />
      </section>
      <hr />

      <section>
        <h2>20. Function Hoisting</h2>
        <FunctionHoisting />
      </section>
      <hr />

      <section>
        <h2>21. Short Circuiting</h2>
        <ShortCircuiting />
      </section>
      <hr />

      <section>
        <h2>22. Nullish Coalescing</h2>
        <NullishCoalescing />
      </section>
      <hr />

      <section>
        <h2>23. Optional Chaining</h2>
        <OptionalChaining />
      </section>
      <hr />

      <section>
        <h2>24. Type Conversion</h2>
        <TypeConversion />
      </section>
      <hr />

      <section>
        <h2>25. Loops</h2>
        <Loops />
      </section>
      <hr />

      <section>
        <h2>26. Switch Statements</h2>
        <SwitchStatements />
      </section>
      <hr />

      <section>
        <h2>27. Truthy & Falsy</h2>
        <TruthyFalsy />
      </section>
      <hr />

      <section>
        <h2>28. Callback Functions</h2>
        <CallbackFunctions />
      </section>
      <hr />

      <section>
        <h2>29. Function Default Parameters</h2>
        <FunctionDefaultParams />
      </section>
      <hr />

      <section>
        <h2>30. Rest Parameters</h2>
        <RestParameters />
      </section>
      <hr />

      <section>
        <h2>31. Array Reduce</h2>
        <ArrayReduce />
      </section>
      <hr />

      <section>
        <h2>32. Chaining Methods</h2>
        <ChainingMethods />
      </section>
      <hr />

      <section>
        <h2>33. Math Functions</h2>
        <MathFunctions />
      </section>
      <hr />

      <section>
        <h2>34. Date and Time</h2>
        <DateAndTime />
      </section>
      <hr />

      <section>
        <h2>35. Set and Map</h2>
        <SetAndMap />
      </section>
      <hr />

      <section>
        <h2>36. JSON Operations</h2>
        <JSONOperations />
      </section>
      <hr />

      <section>
        <h2>37. Local Variables</h2>
        <LocalVariables />
      </section>
      <hr />

      <section>
        <h2>38. Global Scope</h2>
        <GlobalScope />
      </section>
    </div>
  );
};

export default Lab3;

// Optional render if standalone
if (document.getElementById("root")) {
  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(<Lab3 />);
}