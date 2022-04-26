import styled from 'styled-components';

import { colors } from '@/constant';

export const StyledTodoListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  background-color: ${colors.orange};
  color: ${colors.white};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledTodoListItemCheckBox = styled.input`
  background-color: ${colors.orange};
`;

export const StyledTodoListItemButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
