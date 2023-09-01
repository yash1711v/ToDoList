import React, { useEffect }  from "react";

import { deleteTodo, getAllTodos } from "../Redux/Actions/index";
import { ALL_TODOS,DONE_TODOS,ACTIVE_TODOS } from "../Redux/Actions/type";

import { useDispatch , useSelector} from "react-redux";
//component
import Todo  from "./Todo";
import Tabs from "./Tabs";
export const  Todos =()=>{
    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos)
    const currentTab=useSelector(state=>state.currentTab)
    const getTodos=()=>{
        if(currentTab===ALL_TODOS){
            return todos;
        }else if(currentTab===ACTIVE_TODOS){
            return todos.filter(todo=>!todo.done)
        }else if(currentTab===DONE_TODOS){
            return todos.filter(todo=>todo.done)
        }
    }
    useEffect(()=>{
            dispatch(getAllTodos());
    },[])

    const removeDoneTodos=()=>{
        todos.forEach(({done,_id})=>{
            if(done){
                dispatch(deleteTodo(_id));
            }
        })
    }
    return <article>
       <div>
        <Tabs currentTab={currentTab}/>
        {
            todos.some(todo=>todo.done)?(
                <button
                    onClick={removeDoneTodos}
                    className="button clear"
                    >Remove Done Todos
                </button>
            ):null
        }
       </div>
        <ul>
            {
                getTodos().map(todo=>(
                    <li>
                       <Todo 
                       key={todo.id}
                       todo={todo}
                       />
                    </li>
                ))
            }
        </ul>
    </article>
}

export default Todos;