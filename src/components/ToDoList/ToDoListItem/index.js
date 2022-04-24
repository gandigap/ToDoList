import React from 'react';

import { StyledToDoListItem } from './style';

const ToDoListItem = ({ dataTodo }) => {
  const { id, text, statusActive } = dataTodo;
  const deleteTodoHandle = () => {
    console.log('delete');
  };

  return <StyledToDoListItem id={`todo-${id}`}>{text}</StyledToDoListItem>;
};

export default ToDoListItem;
