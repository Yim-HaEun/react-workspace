import React,{useState} from "react";

//증가시키는 함수 만들기
function AddCount(){
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count +1);
    }
    return(
        <div>
            <h2>좋아요 수 : {count}</h2>
            <button onClick={increment}>좋아요♥</button>
        </div>
    )
}

function Count(){
    return(
        <div>
            <AddCount/>
        </div>
    )
}
export default Count;