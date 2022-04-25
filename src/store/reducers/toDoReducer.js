/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */

import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from '@/constant';

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, { id: action.id, text: action.text }],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };

    case CHANGE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo,
        ),
      };

    default:
      return state;
  }
};
