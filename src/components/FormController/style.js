import styled from 'styled-components';

export const StyledFormController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  & input {
    margin: 4px;
    padding: 4px;
    font-size: 18px;
    border-radius: 10px;
  }

  & form {
    display: flex;
    align-items: center;
  }
`;

export const StyledFormLabel = styled.label`
  color: #e07a5f;
`;

export const StyledFormButton = styled.button`
  padding: 4px;
  background-color: #e07a5f;
  color: #264653;
  font-size: 20px;
  cursor: pointer;
`;
