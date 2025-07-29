// Labs/Lab4/ReduxCounter.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { increment, decrement } from "../../store/counterSlice";

export default function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}