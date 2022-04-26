import styled from 'styled-components';

export const StyledApp = styled.div`
  min-height: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #264653;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const StyledAppTitle = styled.h2`
  padding: 20px;
  font-size: 36px;
  font-weight: bold;
  background-color: #264653;
`;

export const StyledAppContainer = styled.div`
  padding: 10px;
  width: 100%;
  box-shadow: 0px 0px 10px 5px rgb(255 255 255 / 40%);
`;
