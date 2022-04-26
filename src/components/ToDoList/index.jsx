import React from 'react';
import { useSelector } from 'react-redux';

import TodoListItem from './TodoListItem';

import { StyledTodoList } from './style';

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todoState);

  const listToRender = () =>
    todoList &&
    todoList.map((todoInfo) => (
      <TodoListItem key={todoInfo.id} dataTodo={todoInfo} />
    ));

  return <StyledTodoList>{listToRender()}</StyledTodoList>;
};

export default TodoList;
