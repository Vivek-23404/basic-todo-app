import { useEffect, useState } from "react";
import Todo from "./components/Todo"


function App() {

  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isupdateTodo, setIsUpdatetingTodo] = useState(false)
  const [todoID, setTodoID] = useState("")

  
  const getAllTodo = async () =>{
    try {
      const res = await fetch("http://localhost:3000/home", {
        method : "GET"
      })
      const data  = await res.json()
      setTodo(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getAllTodo()
  },[])


  


  const addTodo = async (text) =>{
    
    try {
        const data = { task : text }
        const res = await fetch("http://localhost:3000/addTodo", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body :  JSON.stringify(data)
        })
  
        
        setText("")
        console.log(res);
  
        if(!res.ok){
          alert("Task cant be empty")
        }
        else{
          getAllTodo()
        }

    } catch (error) {
      console.log(error);
    }
  }
  

  const updateTodo = async (updateID, updateText) =>{
    try {
      
      setText(updateText)
  
      const data = {
        id : updateID,
        task : text
      }



      const res = await fetch("http://localhost:3000/update",{
        method : "PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      })


      setIsUpdatetingTodo(false)
      setText("")
      getAllTodo()

    } catch (error) {
      console.log(error);
    }
  }

 
  

  const updateMode = async (id, text) =>{
    setIsUpdatetingTodo(true)
    setText(text)
    setTodoID(id)
  }
  const deleteTodo = async (deleteID) =>{
    const data = {
      id : deleteID
    } 
    console.log(deleteID);
    console.log("Data",data);

    

    if(confirm("You want to delete is")){
    
      try {
        const res = await fetch("http://localhost:3000/delete",{
          method : "DELETE",
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })

        console.log(res);

        getAllTodo()
      } catch (error) {
        console.log(error);
      }
  }
  else{
    alert("Delete operation canceled")
  }


  }

  

  return (
    <>
      <div className="container">
          <h1>Todo App</h1>

          <div className="top">

            
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Add Todo" />

            {
              isupdateTodo ? (<button onClick={()=>updateTodo(todoID,text)} className="add">Update</button>) : (<button onClick={()=>addTodo(text)} className="add">Add</button>)
            }
            
          </div>

          <div className="list">
            {
              todo.map((item)=>(
                <Todo key={item._id} text={item.task}  updateTodo={()=>updateMode(item._id, item.task)}  deleteTodo={()=> deleteTodo(item._id)} />
              ))
            }
            
          </div>
      </div>
    </>
  )
}

export default App
