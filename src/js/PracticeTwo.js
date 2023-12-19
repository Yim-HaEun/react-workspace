//useEffect document.title을 사용해 상단바 위 제목을 변경
//map 을 사용해서 todoList 만들어보기
//<button> 증가하기에 useCallBack 사용해보기 

import React, {useCallback,useEffect,useState} from "react";
import '../css/App.css';

const PracticeTwo = () => {
    const[count, setCount] = useState(0);
    const[todos, setTodos] = useState([]); //할 일 목록 배열 생성
    const[newTodo, setNewTodo] = useState('');//할 일 추가하기 위한 input String state 생성
    //할 일이 추가될 때마다 자동으로 갯수 추가해주는 count state 생성
    const[countTodo, setCountTodo] =useState(0);

    const addTodo = () =>{
        if(newTodo.trim() !== ''){
            setTodos([...todos, newTodo]);
            setNewTodo('');
            //할일이 추가될 때마다 count 증가
            setCountTodo(countTodo+1);

        }
    }

    //할 일 삭제
    const removeTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index,1);
        setTodos(updateTodos);
        setCountTodo(count -1);  //countTodo 감소
    };

    const heart = useCallback(() => {
        setCount(count +1);
    },[count]);

    const todoCount = useCallback(() => {
        setCountTodo(countTodo +1);
    },[countTodo]);

    useEffect(()=> {
        document.title = `할 일 갯수 ${countTodo}`;
        console.log('todos 변경됨 : ',todos );

    }, [countTodo,todos]);

    return(
        <div>
            <h2>TODO List</h2>
            <div>
                <input 
                type ="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick ={()=>{
                    addTodo();
                    todoCount();
                }}> + ToDo </button>

                <ul>
                    {todos.map((todo, index) =>(
                        <li key={index}>
                            {todo}
                            <button onClick ={() => removeTodo(index)}>
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            
            <h3>좋아요 눌러주세요 </h3>
            <div>
                <p>좋아요 ♥{count}</p>
                <button onClick={heart}>  ♡~ ლ ´ڡ`ლ </button>
            </div>
        </div>
    );
};

export default PracticeTwo;