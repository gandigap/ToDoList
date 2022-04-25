import React from 'react';
import FormController from './components/FormController';
import TodoList from './components/TodoList';

import { pageText } from './constant';
import GlobalStyle from './globalStyles';

import { StyledApp, StyledAppContainer, StyledAppTitle } from './style';

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <StyledAppTitle>{pageText.mainTitle}</StyledAppTitle>
    <StyledAppContainer>
      <FormController />
      <TodoList />
    </StyledAppContainer>
  </StyledApp>
);

export default App;
