// Labs/Lab4/ReduxString.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setMessage } from "../../store/stringSlice";

export default function ReduxString() {
  const message = useSelector((state: RootState) => state.string.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux String</h3>
      <p>Message: {message}</p>
      <input
        type="text"
        value={message}
        onChange={(e) => dispatch(setMessage(e.target.value))}
        placeholder="Type a new message"
      />
    </div>
  );
}