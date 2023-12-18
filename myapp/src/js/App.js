import React,{useState} from "react";
import cake from '../img/cake.PNG';

function App() {
 
  return (
    <div>
        <img src={cake}/>
       <h1>키라키라 바닐라 케이크</h1>
        <a>
          동물성크림의 케이크입니다.
        </a>
      
    </div>
  );
}

export default App;
