// src/Labs/Lab4/ReduxExamples/Todos/todosReducer.ts

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 123, title: "Learn React" },
    { id: 234, title: "Learn Node" },
    { id: 345, title: "Learn Mongo" },
  ],
  todo: { id: 0, title: "" },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state) => {
      const newTodo = {
        ...state.todo,
        id: new Date().getTime(),
      };
      state.todos.push(newTodo);
      state.todo = { id: 0, title: "" };
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state) => {
      state.todos = state.todos.map((t) =>
        t.id === state.todo.id ? state.todo : t
      );
      state.todo = { id: 0, title: "" };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
