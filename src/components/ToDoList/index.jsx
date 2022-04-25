import React from 'react';
import { useSelector } from 'react-redux';

import TodoListItem from './TodoListItem';

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todoState);

  const listToRender = () =>
    todoList &&
    todoList.map((todoInfo) => (
      <TodoListItem key={todoInfo.id} dataTodo={todoInfo} />
    ));

  return <div>{listToRender()}</div>;
};

export default TodoList;
