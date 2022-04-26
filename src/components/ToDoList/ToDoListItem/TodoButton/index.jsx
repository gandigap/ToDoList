import React from 'react';
import PropTypes from 'prop-types';

import DeleIcon from '@/images/deleteIcon.svg';
import EditIcon from '@/images/editIcon.svg';
import { buttonTypes, colors } from '@/constant';

import { StyledTodoButton, StyledTodoButtonImage } from './style';

const TodoButton = ({ type, handleClick, editable }) => (
  <StyledTodoButton
    onClick={handleClick}
    backgroundColor={editable ? colors.white : colors.transparent}
  >
    <StyledTodoButtonImage
      src={type === buttonTypes.delete ? DeleIcon : EditIcon}
      alt={type}
    />
  </StyledTodoButton>
);

TodoButton.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  editable: PropTypes.bool,
};

TodoButton.defaultProps = {
  type: '',
  handleClick: () => {},
  editable: false,
};

export default TodoButton;
