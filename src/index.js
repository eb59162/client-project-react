

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
// import UserSlice from "./Redux/UserRducuers"
import PhotoSlice from "./Redux/PhotosReducer"

const root = ReactDOM.createRoot(document.getElementById('root'));
const MyStore = configureStore({
  reducer: {
   ToDoSlice,
   PostSlice,
  //  UserSlice,
   PhotoSlice,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
