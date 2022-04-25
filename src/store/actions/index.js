import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from '../../constant';

export const addTodo = ({ id, text }) => ({
  type: ADD_TODO,
  id,
  text,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const changeTodo = (id, text) => ({
  type: CHANGE_TODO,
  id,
  text,
});
