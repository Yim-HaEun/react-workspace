import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/App';
import Count from './js/Count';
import reportWebVitals from './reportWebVitals';
import ToggleButton from './js/ToggleButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Count/><br/>
    <ToggleButton/>
  </React.StrictMode>
);

reportWebVitals();

//React.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기위한 도구
//reportWebVitals : react 성능 측정하기위한 메서드
