import mongoose from "mongoose";
 const Connection=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017").then(()=>{
console.log("connection successfull with database");
}).catch((err)=>{
    console.log(`Error While Connecting is:-${err}`)
});
}
export default Connection;