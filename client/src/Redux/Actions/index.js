import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO , TOGGLE_TODO,UPDATE_TODO , DELETE_TODO, TOGGLE_TAB} from './type';
const Api_Url='http://localhost:8000';
export const addNewTodo=(data)=> async(dispatch)=>{
    try{
    const res=await axios.post(`${Api_Url}/todos`,{data});


dispatch({type: ADDNEW_TODO, payload: res.data})
 }catch(error){
        console.log("Error while calling addnewTodo Api",error.message);
    }

}

export const getAllTodos = ()=> async(dispatch)=>{
    try{
        const res=await axios.get(`${Api_Url}/todos`);
    
    
    dispatch({type: GETALL_TODO, payload: res.data})
     }catch(error){
            console.log("Error while calling getAllTodos Api",error.message);
        }
}

export const toggleTodo = (id)=> async(dispatch)=>{
    try{
        const res=await axios.get(`${Api_Url}/todos/${id}`);
    
    
    dispatch({type: TOGGLE_TODO, payload: res.data})
     }catch(error){
            console.log("Error while calling getAllTodos Api",error.message);
        }
}

export const updateTodo = (id,data)=> async(dispatch)=>{
    try{
        const res=await axios.put(`${Api_Url}/todos/${id}`,{data});
    
    
    dispatch({type: UPDATE_TODO, payload: res.data})
     }catch(error){
            console.log("Error while calling UpdateTodo Api",error.message);
        }
}
export const deleteTodo = (id,data)=> async(dispatch)=>{
    try{
        const res=await axios.delete(`${Api_Url}/todos/${id}`);
    
    
    dispatch({type: DELETE_TODO, payload: res.data})
     }catch(error){
            console.log("Error while calling DeleteTodos Api",error.message);
        }
}

export const toggleTab = (tab)=> async(dispatch)=>{
    dispatch({type: TOGGLE_TAB, selected:tab})
}