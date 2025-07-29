// Labs/Lab4/ReduxToggle.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggle } from "../../store/toggleSlice";

export default function ReduxToggle() {
  const isOn = useSelector((state: RootState) => state.toggle.on);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Toggle</h3>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button onClick={() => dispatch(toggle())}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}