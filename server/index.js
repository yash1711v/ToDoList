import express from "express";
import cors from 'cors';
import Connection from "./db/connect.js";
import Routes  from "./routes/routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/',Routes );
const PORT=process.env.Port || 8000;
Connection();
app.listen(PORT,()=>console.log(`server is running sucessfully on ${PORT}`)); 