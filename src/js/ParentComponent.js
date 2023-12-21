import React from "react";
import ChildComponent from "./ChildComponent";
//import ChildComponent from './ChildComponent'

//ChildComponent에서는 prop라는 이름으로 파라미터를 전달받는다.
//ChildComponent의 prop는 무조건 사용해야하는 이름은 아니지만 부모에게 전달받아서 데이터를 사용한다는 의미를 지니기때문에 
//부모 컴포넌트에서 전달받을 때는 prop라는 이름을 사용하는게 좋다.

//message와 data또한 개발자가 정해놓은 이름일뿐이지 무조건으로 작성해야하는 이름은 아님

function ParentComponent(){
    const data = 'Hello 나는 ParentComponent야';
    
    return <ChildComponent message={data}/>;

}export default ParentComponent;