import React,{useState} from "react";

//증가시키는 함수
function AddCount (){
    //useState를 사용해서 값 증가하는 함수를 완성할 것 
    const[count,setCount]=useState(0);
    const increment = ()=>{
        setCount(count +1);
    }
    return(
        <div>

            <h1>숫자 : {count}</h1>
            <button onClick={increment}>클릭하기</button>
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

