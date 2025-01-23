import {useState} from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState(['Laundry', 'Shopping', 'Cleaning']);
    const [newTask, setNewTask] = useState('');

    function handleTaskChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...tasks, newTask])
            setNewTask('')
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask)
        }
    }

    return <div className="toDoList">
        <h1>To Do List</h1>
        <div>
            <input
                type="text" value={newTask} placeholder="Enter a task:" onChange={handleTaskChange}
            />
            <button className="addButon" onClick={addTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span class="text">{task}</span>
                    <button className={"deleteButton"} onClick={() => deleteTask(index)}>Delete</button>
                    <button className={"moveButton"} onClick={() => moveTaskUp(index)}>UP Task</button>
                    <button className={"moveButton"} onClick={() => moveTaskDown(index)}>DOWN Task</button>
                </li>)}
        </ol>

    </div>
}