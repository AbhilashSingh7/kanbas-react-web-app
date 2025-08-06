import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export default function CounterRedux() {
  const count = useSelector((state: any) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux">
      <h3>Counter Redux</h3>
      <h4>{count}</h4>
      <button onClick={() => dispatch(increment())} id="wd-counter-redux-increment-click">
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} id="wd-counter-redux-decrement-click">
        Decrement
      </button>
      <hr />
    </div>
  );
}
