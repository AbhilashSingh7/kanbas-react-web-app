// src/Labs/Lab5/client.ts
import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

// ✅ Welcome Message
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/Lab5/welcome`);
  return response.data;
};

// ✅ Assignment API
const ASSIGNMENT_API = `${REMOTE_SERVER}/labs/assignment`;

export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};

export const updateAssignmentTitle = async (title: string) => {
  const response = await axios.put(`${ASSIGNMENT_API}/title`, { title }); // ✅ use PUT + JSON
  return response.data;
};

// ✅ Todos API
const TODOS_API = `${REMOTE_SERVER}/labs/todos`;

export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

export const createTodo = async (todo: { title: string; completed: boolean }) => {
  const response = await axios.post(`${TODOS_API}`, todo); // send JSON body
  return response.data;
};


export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${TODOS_API}/${id}`); // ✅ use DELETE with ID param
  return response.data;
};

export const updateTodoTitle = async (id: number, title: string) => {
  const response = await axios.put(`${TODOS_API}/${id}/title`, { title }); // ✅ PUT + JSON body
  return response.data;
};

export const completeTodo = async (id: number, completed: boolean) => {
  const response = await axios.put(`${TODOS_API}/${id}/completed`, { completed }); // ✅ PUT + JSON
  return response.data;
};

export const updateTodoDescription = async (id: number, description: string) => {
  const response = await axios.put(`${TODOS_API}/${id}/description`, { description }); // ✅ PUT + JSON
  return response.data;
};

export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};


// ✅ Alias for compatibility
export const removeTodo = deleteTodo;
