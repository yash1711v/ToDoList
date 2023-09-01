
import Todo from '../model/Todo.js'

export const addTodo=async (request,response)=>{
 try{
  const newTodo=await Todo.create({
    data: request.body.data,
    createdAt:Date.now()
  })
  await newTodo.save();

 return  response.status(200).json(newTodo);
 }catch(e){
  return response.status(500).json(e.message);
 }
}

export const getAllTodo = async (request,response)=>{
  try{
    const todos=await Todo.find({}).sort({'createdAt':-1})
  
   return  response.status(200).json(todos);
   }catch(e){
    return response.status(500).json(e.message);
   }
}
export const toggleTodoDone = async (request,response)=>{
  try{
    const todoRef=await Todo.findById(request.params.id);
    const todo=await Todo.findByIdAndUpdate(
      {_id:request.params.id},
      {done: !todoRef.done}
      )
  await todo.save();
   return  response.status(200).json(todo);
   }catch(e){
    return response.status(500).json(e.message);
   }
}
export const updateTodo = async (request,response)=>{
  try{
    await Todo.findByIdAndUpdate(
      {_id:request.params.id},
      {data: request.body.data}
      )
      const todo= await Todo.findById(request.params.id)
   return  response.status(200).json(todo);
   }catch(e){
    return response.status(500).json(e.message);
   }
}
export const deleteTodo  = async (request,response)=>{
  try{
    const todo=await Todo.findByIdAndDelete(request.params.id)
   return  response.status(200).json(todo);
   }catch(e){
    return response.status(500).json(e.message);
   }
}