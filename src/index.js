import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import App from './App';

const rootElement = document.getElementById('root');

const render = () => {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// Render your app
render();
