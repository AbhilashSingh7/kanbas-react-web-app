// src/Labs/Lab4/ReduxExamples/index.tsx

import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./Todos/TodoList";

export default function ReduxExamples() {
    return (
      <div>
        <h2>Redux Examples</h2>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <TodoList />
      </div>
    );
  }