import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Count from './js/Count';
//import ToggleButton from './js/ToggleButton';
//import IndexExample from './js/IndexExample';
//import ImageChange from './js/ImageChange';
import ObjectExample from './js/ObjectExample';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App > react에서  주석은 {/**/} 
    
   {/* <Count />*/}
    {/*<ToggleButton/>*/}
    {/*<IndexExample/>*/}
    {/*<ImageChange/>*/}
    <ObjectExample/>

   
  </React.StrictMode>
);

reportWebVitals();
