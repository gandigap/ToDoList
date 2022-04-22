import { combineReducers } from 'redux';
import { toDoReducer } from './toDoReducer';

const rootReducer = combineReducers({
  toDoState: toDoReducer,
});
export default rootReducer;
