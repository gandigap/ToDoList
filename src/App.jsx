import React from 'react';
import FormController from './components/FormController';
import ToDoList from './components/ToDoList';
import GlobalStyle from './globalStyles';

import { StyledApp } from './style';

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <ToDoList />
    <FormController />
  </StyledApp>
);

export default App;
