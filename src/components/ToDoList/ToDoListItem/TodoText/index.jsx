import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { changeTodo } from '@/store/actions';

import { StyledTodoText } from './style';

const TodoText = ({ text, editable, todoId, handlePress }) => {
  const [value, setValue] = useState(text);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlePress();
      dispatch(changeTodo(todoId, value));
    }
  };

  return (
    <StyledTodoText
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={!editable}
    />
  );
};

TodoText.propTypes = {
  text: PropTypes.string,
  editable: PropTypes.bool,
  todoId: PropTypes.number,
  handlePress: PropTypes.func,
};

TodoText.defaultProps = {
  text: 'default text',
  editable: false,
  todoId: 0,
  handlePress: () => {},
};

export default TodoText;
