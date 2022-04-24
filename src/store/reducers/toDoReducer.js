import { ADD_TODO } from '../../constant';

const initialState = {
  toDoList: [],
};

export const toDoReducer = (
  state = initialState,
  { type, id, text, statusActive },
) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        toDoList: [...state.toDoList, { id, text, statusActive }],
      };

    default:
      return state;
  }
};
