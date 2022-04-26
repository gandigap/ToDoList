import styled from 'styled-components';

import { colors } from '@/constant';

export const StyledTodoText = styled.input`
  margin: 4px;
  padding: 4px;
  flex-grow: 1;
  background: ${colors.transparent};
  border: 1px solid ${colors.black};
  font-size: 24px;
  font-style: italic;

  @media (max-width: 768px) {
    width: 240px;
  }

  @media (max-width: 320px) {
    width: 200px;
  }

  &:disabled {
    color: ${colors.black};
    border: 1px solid ${colors.transparent};
  }
`;
