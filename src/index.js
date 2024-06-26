

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ToDoSlice from './Redux/todosreducer';
import PostSlice from "./Redux/PostReducer"
const root = ReactDOM.createRoot(document.getElementById('root'));
const MyStore = configureStore({
  reducer: {
   ToDoSlice,
   PostSlice,
  }
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={MyStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
