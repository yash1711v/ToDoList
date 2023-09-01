import React ,{ useState } from "react";
import {useDispatch} from "react-redux";
import { addNewTodo } from "../Redux/Actions";

const TodoForm =()=>{
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const onFormSubmit=(e)=>{
        e.preventDefault();
            dispatch(addNewTodo(text));
            setText('');
    }
    const onInputChange=(e)=>{
            // console.log(e.target.value);
            setText(e.target.value); 
    }
    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            placeholder="Enter new Todo..."
            className="input"
            onChange={onInputChange}
            value={text}
            />
        </form>
    )
}

export default TodoForm;