import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state: any) => state.todosReducer.todos);

  return (
    <div id="wd-todo-list-redux">
      <h3>Todo List (Redux)</h3>
      <ul className="list-group mb-3">
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoForm />
      <hr />
    </div>
  );
}
