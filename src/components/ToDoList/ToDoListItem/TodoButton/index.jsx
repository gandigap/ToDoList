import React from 'react';
import PropTypes from 'prop-types';

import DeleIcon from '@/images/deleteIcon.svg';
import EditIcon from '@/images/editIcon.svg';
import { buttonTypes } from '@/constant';

import { StyledTodoButton, StyledTodoButtonImage } from './style';

const TodoButton = ({ type, handleClick }) => (
  <StyledTodoButton onClick={handleClick}>
    <StyledTodoButtonImage
      src={type === buttonTypes.delete ? DeleIcon : EditIcon}
      alt="React Logo"
    />
  </StyledTodoButton>
);

TodoButton.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

TodoButton.defaultProps = {
  type: '',
  handleClick: () => {},
};

export default TodoButton;
