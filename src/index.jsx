import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const rootContainer = document.getElementById('root');
if (!rootContainer) throw new Error('Failed to find the root element');
const root = createRoot(rootContainer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
