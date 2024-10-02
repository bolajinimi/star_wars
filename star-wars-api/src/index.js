// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from '../src/store/store'; // Adjust the import path based on your store location
import App from './App'; // Adjust if necessary

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
