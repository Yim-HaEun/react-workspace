import React,{useEffect, useState} from "react";

function Timer(){
    const[count,setCount] = useState(0);
    useEffect(()=>{
        document.title = `타이틀을 보셔라${count}`;
    });
  
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count +1)}>Click</button>
            {/* <button onClick={increment}>Click</button>*/}
            {/*const increment = () => {
            setCount(count + 1);
             } 위 버튼 클릭과 const incremanet로 작성해준 메서드는 동일한 효능을 지닌다*/}

        </div>
    )
}export default Timer;