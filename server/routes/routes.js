import express from "express";

const route=express.Router();
import { addTodo , getAllTodo , toggleTodoDone , updateTodo , deleteTodo } from "../controler/todo-controler.js";
route.post('/todos',addTodo);
route.get('/todos',getAllTodo);
route.get('/todos/:id',toggleTodoDone);
route.put('/todos/:id',updateTodo);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);

export default route