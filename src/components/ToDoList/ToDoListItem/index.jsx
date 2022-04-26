import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { buttonTypes } from '@/constant';
import { changeTodo, deleteTodo } from '@/store/actions';

import TodoText from './TodoText';
import TodoButton from './TodoButton';
import {
  StyledTodoListItem,
  StyledTodoListItemButtonsContainer,
} from './style';

const TodoListItem = ({ dataTodo }) => {
  const { id, text } = dataTodo;
  const [textValue, setTextValue] = useState(text);
  const [isEditable, setIsEditable] = useState(false);

  const dispatch = useDispatch();

  const handleChangeTextValue = (e) => {
    setTextValue(e.target.value);
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    setIsEditable(!isEditable);
  };

  const handleSome = (event) => {
    if (event.key === 'Enter') {
      dispatch(changeTodo(id, textValue));
      setIsEditable(!isEditable);
    }
  };

  return (
    <StyledTodoListItem id={`todo-${id}`}>
      <TodoText
        text={textValue}
        editable={isEditable}
        todoId={id}
        handlePress={handleSome}
        handleChange={handleChangeTextValue}
      />
      <StyledTodoListItemButtonsContainer>
        <TodoButton
          type={buttonTypes.edit}
          handleClick={handleEditTodo}
          editable={isEditable}
        />
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
    text: '',
  },
};

export default TodoListItem;
