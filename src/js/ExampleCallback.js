import React,{useCallback,useState} from "react";

function ExampleCallBack(){
    const[count, setCount] = useState(0);

    const increClick = useCallback( () => { //메모리 사용 감소를 위해 useCallback을 사용함
        setCount(count +1);
    }, [count]);
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increClick}>증가하기</button>
        </div>
    )
}
export default ExampleCallBack;
