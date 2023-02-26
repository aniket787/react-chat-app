import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBQ-tzFyihjg9W21wlypdC-uAje4IzOSpo",
  authDomain: "chat-app-39806.firebaseapp.com",
  databaseURL: "https://chat-app-39806-default-rtdb.firebaseio.com",
  projectId: "chat-app-39806",
  storageBucket: "chat-app-39806.appspot.com",
  messagingSenderId: "562104405640",
  appId: "1:562104405640:web:3559a87415c4dff665193d"
};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

