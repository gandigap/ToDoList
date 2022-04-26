import styled from 'styled-components';

import { colors } from '@/constant';

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

    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const StyledFormLabel = styled.label`
  color: ${colors.orange};
`;

export const StyledFormButton = styled.button`
  padding: 4px;
  background-color: ${colors.orange};
  color: ${colors.darkBlue};
  font-size: 20px;
  cursor: pointer;
`;
