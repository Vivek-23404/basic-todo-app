import { AiFillDelete } from "react-icons/ai"
import { BiEdit } from "react-icons/bi"


const Todo = ({text, updateTodo, deleteTodo, todoID}) => {

    
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateTodo}/>
        <AiFillDelete className="icon"  onClick={deleteTodo}/>
      </div>
    </div>
  )
}

export default Todo
