import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'animate.css/animate.css';
import reportWebVitals from './reportWebVitals';
import ToggleContextProvider from './Context/toggle';


ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
    <App />
    </ToggleContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
