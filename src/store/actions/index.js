import { ADD_TODO } from '../../constant';

export const addToDoAction = ({ id, text, statusActive }) => ({
  type: ADD_TODO,
  id,
  text,
  statusActive,
});
