import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task : {
        type : String
    }
})


const todosModel = mongoose.model("todos", todoSchema)

export default todosModel