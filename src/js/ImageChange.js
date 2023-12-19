import React,{useState} from "react";
import  hkd1 from '../img/hkd1.png';
import hkd5 from '../img/hkd5.png';

function ImageChange(){
    //초기 이미지 경로는 ../img/hkd1.png로 설정되어있는 hkd1으로 초기 이미지 설정
    const [imageSrc, setImageSrc]=useState(hkd1);
    const [isClick, setIsClick]=useState(true);

    //이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭 함수 만들기
    const handleClick =()=>{
        if(isClick){
            setImageSrc(hkd5);
            setIsClick(false);
        }else{ //거짓일때 false로 되어있는 값을 true로 변경
            setImageSrc(hkd1);
            setIsClick(true);
        }
    }

    return(
        <div>
            <img src={imageSrc} onClick={handleClick}/> {/*경로 넣어주고, 클릭할시 클릭함수*/}
        </div>
    )
}

export default ImageChange;
/*

===동등 연산자로 자동으로 형변환을 수행하기 때문에 
데이터 타입이 다를 경우에도 변환을 일부 시도하기도함 
===일치 연산자로 값과 데이터 타입이 모두 같아야지 true를 반환함
const handleClick =()=>{
    if(imageSrc === image1){
        setImageSrc(image2);
       
    }else if(imageSrc === image2){ //거짓일때 false로 되어있는 값을 true로 변경
        setImageSrc(image3);
    }else{
        //image가 image3일 경우 다시 처음으로 돌아감
        setImageSrc(image1);
    }
}
*/