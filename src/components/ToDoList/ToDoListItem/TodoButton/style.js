import styled from 'styled-components';

export const StyledTodoButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 4px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition:all ease 0.3s;

  &:hover {
    box-shadow: 0px 0px 4px 2px rgb(255 255 255 / 40%);    

  &:active {    
    transform: scale(0.9);
  }
`;

export const StyledTodoButtonImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 4px;
`;
