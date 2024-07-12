import todosModel from "../models/todo.js";


export const  getAll = async (req,res) =>{
    try {
        const todosRes = await todosModel.find()
        console.log(todosRes);
        res.send(todosRes)
    } catch (error) {
        console.log(error);
    }
}

    
export const createTodo = async (req,res) =>{
    try {
        const {task} = req.body

        if(!task){
            res.status(401).send({
                message : "Task cant be empty",
                ok : false
            })
            return;
        }
        else{

            console.clear()
            console.log(req.body);
            // const task = JSON.parse(req.body.task)
            
            
            
            console.log(task);
            const response = await todosModel.create({task})    
            console.log(response);
            res.send({
                response,
                message : "Todo Added Successfully",
            })
        }

        } catch (error) {
        console.log(error);
    }
}

export const upadateTodo = async (req,res) =>{
    try {
        const {id, task} = req.body
        const response = await todosModel.findByIdAndUpdate(id, {task})
        console.log(response);

        res.send({
            message : "Todo Updated Successfully",
            response
        })
        res.status(200)
    } catch (error) {
        console.log(error);
    }
}


export const deleteTodo = async (req,res) =>{
    try {
        const {id} = req.body
        console.log("Body : ",req.body, "ID", id);
        
        
        const response = await todosModel.findByIdAndDelete(id)
        console.log(response);
        res.send({
            message : "Todo deleted Successfully",
            response
        })
    } catch (error) {
        console.log(error);
    }
}   