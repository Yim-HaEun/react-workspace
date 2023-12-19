import React, {useEffect,useState} from 'react';
function R003_ImportComponent (){
	const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title= `count 연습 ${count}`;
    });
	return (
        <div>
            <h2>[THIS IS COUNTING COMPONENT]</h2>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>

        </div>
		
	)

}
export default R003_ImportComponent;