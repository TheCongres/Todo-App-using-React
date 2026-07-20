
import TodoItem from "./TodoItem"


function TodoList({ tasks, addTask, setTodoItem, todoItem, deleteTask, taskChangedStatut }) {





    const handleAdd = (e) => {

        e.preventDefault()
        if (todoItem.trim() !== "") {
            addTask(todoItem)
            setTodoItem("")
        }

    }

    const handleChange = (e) => {
        setTodoItem(e.target.value)
    }



    return (
        <div className="todo-list">
            <h3>
                To do list
            </h3>

            <form onSubmit={handleAdd}>

                <input type="text" name="add-task" id="add-task" value={todoItem} onChange={handleChange} />
                <button type="submit" className="add-button">Add new task</button>
            </form>
            <ol>
                {tasks.map(task => (
                    <TodoItem task={task} deleteTask={deleteTask} taskChangedStatut ={taskChangedStatut} />
                ))}
            </ol>
        </div>
    )
}
export default TodoList