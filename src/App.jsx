import React from 'react';
import { useDispatch } from 'react-redux';

import { addToDoAction } from './store/actions';
import { StyledApp } from './style';

const App = () => {
  const dispatch = useDispatch();

  const addToDoHandle = () => {
    dispatch(addToDoAction({ some: 'some' }));
  };

  return (
    <StyledApp>
      App
      <button type="button" onClick={addToDoHandle}>
        Button
      </button>
    </StyledApp>
  );
};

export default App;
