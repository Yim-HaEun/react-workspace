import React,{useEffect, useState} from "react";

function Timer(){
    const[count,setCount] = useState(0);
    useEffect(()=>{
        document.title = `타이틀을 보셔라${count}`;
    });
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count +1)}>
                Click
            </button>
        </div>
    )
}export default Timer;