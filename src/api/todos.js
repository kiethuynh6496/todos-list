import instance from "./axiosClient";

const END_POINT = {
  TODOS: "todos",
};

export const getTodosAPI = () => {
  return instance.get(`${END_POINT.TODOS}`);
};

export const delTodosAPI = (id) => {
  return instance.delete(`${END_POINT.TODOS}/${id}`);
};

export const addTodosAPI = (todo) => {
  return instance.post(`${END_POINT.TODOS}`, todo);
};

export const editTodosAPI = (todo) => {
  return instance.put(`${END_POINT.TODOS}`, todo);
};
