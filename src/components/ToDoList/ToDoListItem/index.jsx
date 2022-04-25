import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { buttonTypes } from '@/constant';
import { deleteTodo } from '@/store/actions';

import TodoText from './TodoText';
import TodoButton from './TodoButton';
import {
  StyledTodoListItem,
  StyledTodoListItemButtonsContainer,
} from './style';

const TodoListItem = ({ dataTodo }) => {
  const { id, text } = dataTodo;
  const [isEditable, setIsEditable] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    setIsEditable(!isEditable);
  };

  return (
    <StyledTodoListItem id={`todo-${id}`}>
      <TodoText
        text={text}
        editable={isEditable}
        todoId={id}
        handlePress={handleEditTodo}
      />
      <StyledTodoListItemButtonsContainer>
        <TodoButton type={buttonTypes.edit} handleClick={handleEditTodo} />
        <TodoButton type={buttonTypes.delete} handleClick={handleDeleteTodo} />
      </StyledTodoListItemButtonsContainer>
    </StyledTodoListItem>
  );
};

TodoListItem.propTypes = {
  dataTodo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }),
};

TodoListItem.defaultProps = {
  dataTodo: {
    id: new Date().getTime(),
    text: 'default text',
  },
};

export default TodoListItem;
