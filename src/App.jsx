import { useState } from "react"
import TodoItem from "./components/TodoItems"

export default function App (){
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const addTask = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("task is empty");
    }
    setTodos ((prev)=> [...prev, 
      { id:Date.now(), text:task.trim(), done:false},])
  };
  
  return ( <div>
  <h1>Simple Todo</h1>

  <form onSubmit={addTask}>
  <input type="text" 
   value={task} 
   onChange={(e)=> setTask(e.target.value)} 
    placeholder="Enter task..." />
  <button type="submit">Add</button>
  </form>

  <ul>
    {todos.length === 0 ? (
      <li>no task to display</li>
    ):(
      todos.map((todo) => <TodoItem  todo={todo} key={todo.id} />   )
    )}
  </ul>

</div>


)
}