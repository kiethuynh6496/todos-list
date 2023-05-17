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
