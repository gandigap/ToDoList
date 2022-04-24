import React from 'react';
import FormController from './components/FormController';
import ToDoList from './components/ToDoList';
import { text } from './constant';
import GlobalStyle from './globalStyles';

import { StyledApp, StyledAppContainer, StyledAppTitle } from './style';

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <StyledAppTitle>{text.mainTitle}</StyledAppTitle>
    <StyledAppContainer>
      <FormController />
      <ToDoList />
    </StyledAppContainer>
  </StyledApp>
);

export default App;
