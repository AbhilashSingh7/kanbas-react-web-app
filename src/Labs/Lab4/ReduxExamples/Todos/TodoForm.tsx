import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const todo = useSelector((state: any) => state.todosReducer.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="form-control mb-2"
      />
      <button
        className="btn btn-primary me-2"
        onClick={() => dispatch(addTodo())}
        id="wd-add-todo-click"
      >
        Add
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch(updateTodo())}
        id="wd-update-todo-click"
      >
        Update
      </button>
    </div>
  );
}
