import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: any }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>{todo.title}</div>
      <div>
        <button
          onClick={() => dispatch(setTodo(todo))}
          className="btn btn-warning btn-sm me-1"
          id={`wd-set-todo-${todo.id}`}
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger btn-sm"
          id={`wd-delete-todo-${todo.id}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
