import { useState } from "react"
import TodoList from "./TodoList"
import "./todo-list.css"

export default function App(){
  const [tasks, setTasks] = useState([])
  const [todoItem, setTodoItem] = useState("")

  const addTask = () => {
    setTasks([...tasks, {id: tasks.length + 1, task:todoItem, completed: false}])
    
  }
  

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const taskChangedStatut = (id) => {
    setTasks(tasks.map((t) => 
      t.id === id 
        ? { ...t, completed: !t.completed } 
        : t
    ))
  }

  return (
    <div className="App">
      <TodoList 
      tasks={tasks}
      todoItem = {todoItem}
      addTask = {addTask}
      setTodoItem = {setTodoItem}
      deleteTask={deleteTask}
      taskChangedStatut = {taskChangedStatut}
      />
    </div>
  )
};
