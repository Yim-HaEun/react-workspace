//useState : 상태를 관리하기위해 사용되는 함수, 배열형식으로 사용하며 첫번째 배열을 현재 상태값
//두번째 배열은 상태 업데이트하는 값
//const[count, setCount] = useState(0);
import React,{useState} from "react"; 

//Js에서는 글자값인지 숫자값인지 중요하지 않음
//재사용이 가능한지 재할당이 가능한지가 중요

//var : 재할당 재선언 가능 //밑에서 안된 error 예제 모두 가능 
//let : 재선언 불가능 재할당 가능
//let count =0;
//count =1;
//let count =2; //불가 
//const: 재선언 재할당 둘다 불가능 /한 번 선언하면 다시 값을 변경하거나 수정할 수 없음  
const msg = "hihi";
//msg ="aa"; msg에 다른값을 넣고 싶어서 추가로 값을 변경하려하면 error 발생함

function HiComponent(){
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi 컴포넌트입니다.</p>
    </div>
  )
}

function App() {
  return (
    <div>
     <HiComponent />
     <Counter/>
    </div>
  );
}
export default App;



function Counter () {
  //자바스크립트 코드 작성하는 공간
  //[초기값, 변경될 값] = 초기값 설정해주는 공간
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  return ( //html 태그 코드는 return 안에 작성해줌 
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>증가시키는 버튼</button>
    </div>
    //순수자바스크립트에서는 onclick을, react 자바스크립트에서는 onClick 
  )
}

//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//기본적으로 내보낼 항목을 지정하는 역할을 함
//다른 Js에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함 