import styled from 'styled-components';

export const StyledTodoText = styled.input`
  margin: 4px;
  padding: 4px;
  flex-grow: 1;
  background: transparent;
  border: 1px solid #000;
  font-size: 24px;

  &:disabled {
    color: #000;
    border: 1px solid transparent;
  }
`;
