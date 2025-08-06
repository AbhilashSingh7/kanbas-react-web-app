import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/Lab5/welcome`);
  return response.data;
};

const ASSIGNMENT_API = `${REMOTE_SERVER}/labs/assignment`;

export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};

export const updateAssignmentTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

const TODOS_API = `${REMOTE_SERVER}/labs/todos`;

export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

export const createTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.get(`${TODOS_API}/${id}/delete`);
  return response.data;
};

export const updateTodoTitle = async (id: number, title: string) => {
  const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
  return response.data;
};

export const completeTodo = async (id: number, completed: boolean) => {
  const response = await axios.get(`${TODOS_API}/${id}/completed/${completed}`);
  return response.data;
};

export const updateTodoDescription = async (id: number, description: string) => {
  const response = await axios.get(`${TODOS_API}/${id}/description/${description}`);
  return response.data;
};
