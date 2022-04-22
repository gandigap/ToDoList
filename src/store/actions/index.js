import { ADD_TODO } from '../../constant';

export const addToDoAction = (payload) => ({
  type: ADD_TODO,
  payload,
});
