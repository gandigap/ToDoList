import React from 'react';
import PropTypes from 'prop-types';

import { StyledTodoText } from './style';

const TodoText = ({ text, editable, handlePress, handleChange }) => {
  const handleKeyDown = (event) => {
    handlePress(event);
  };

  return (
    <StyledTodoText
      type="text"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={!editable}
    />
  );
};

TodoText.propTypes = {
  text: PropTypes.string,
  editable: PropTypes.bool,
  handlePress: PropTypes.func,
  handleChange: PropTypes.func,
};

TodoText.defaultProps = {
  text: '',
  editable: false,
  handlePress: () => {},
  handleChange: () => {},
};

export default TodoText;
