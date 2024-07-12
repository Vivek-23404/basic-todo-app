import express from "express"
import { createTodo, deleteTodo, getAll, upadateTodo } from "../controllers/todoControllers.js"
const router = express.Router()

// router.get("/home", (req,res)=>{
//     res.send("home page")
// })


router.get("/home", getAll)
router.post("/addTodo", createTodo)
router.delete("/delete", deleteTodo)
router.put("/update", upadateTodo)

export default router