import React,{useState} from "react";

function ToggleButton(){
    const[isOn, setIsOn]=useState(false);
    const toggle =()=>{
        setIsOn(!isOn); //토글 누르면 상태 변화
    }
    return(
        <div>
            <a>찜하기 : {isOn? '❤️':'🤍'}</a><br/>
            <button onClick={toggle}>찜하기 ♥ </button>
        </div>
    )
}
export default ToggleButton;