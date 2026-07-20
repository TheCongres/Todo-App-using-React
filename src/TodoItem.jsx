

function TodoItem({ task, deleteTask, taskChangedStatut }) {


  const handleToggle = () => {
    taskChangedStatut(task.id)
  }

  const handleDelete = () => {
    
    deleteTask(task.id)
}
  return (
    <div  className={`todo-item ${task.completed ? 'completed': ''}`}>
        <input type="checkbox"   onChange={handleToggle} />
        <span>
        {task.task}
      </span>

    
      <button className="remove-button " onClick={handleDelete} > Delete</button>
    

    </div>
  )

}
export default TodoItem;
