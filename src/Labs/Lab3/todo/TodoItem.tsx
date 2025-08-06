// src/Labs/Lab3/todo/TodoItem.tsx
import { ListGroup } from "react-bootstrap";

type Todo = {
  title: string;
  status: string;
  done: boolean;
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <ListGroup.Item>
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </ListGroup.Item>
  );
};

export default TodoItem;
