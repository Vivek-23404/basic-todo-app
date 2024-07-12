import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDb } from "./db/connectDB.js"
import router from "./routes/todo.js"

const app = express()
dotenv.config()
app.use(cors())

const port = process.env.PORT || 3000
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/todo"


connectDb(DB_URL)

app.use(express.json())
app.use("/", router)

app.get("/", (req,res)=>{
    res.send("MSG from the server")
})
app.listen(port, ()=>{
    console.log(`Server is running on PORT : ${port}`);
}) 