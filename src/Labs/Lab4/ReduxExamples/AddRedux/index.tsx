import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";

export default function AddRedux() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const sum = useSelector((state: any) => state.addReducer.sum);
  const dispatch = useDispatch();

  return (
    <div className="m-2 p-2" id="wd-add-redux">
      <h3>Add Redux</h3>
      <h4>{a} + {b} = {sum}</h4>
      <input
        className="form-control mb-2"
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        className="form-control mb-2"
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(add({ a, b }))} id="wd-add-redux-click" className="btn btn-primary">
        Add
      </button>
      <hr />
    </div>
  );
}
