import { ADD_TODO } from '../../constant';

/* eslint-disable default-param-last */
const initialState = {
  toDoList: [],
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      };

    default:
      return state;
  }
};
