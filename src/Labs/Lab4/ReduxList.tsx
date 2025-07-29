// Labs/Lab4/ReduxList.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addItem, removeItem } from "../../store/listSlice";
import { useState } from "react";

export default function ReduxList() {
  const items = useSelector((state: RootState) => state.list.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addItem(input));
      setInput("");
    }
  };

  return (
    <div>
      <h3>Redux List</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => dispatch(removeItem(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}