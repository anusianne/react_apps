import {useState} from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState('');
    const [newTask, setNewTask] = useState('');

    function handleTaskChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }

    return <div className="toDoList">
        <h1>To Do List</h1>
        <div>
            <input
                type="text" value={newTask} placeholder="Enter a task:" onChange={handleTaskChange}
            />
            <button className="addButon" onClick={addTask}>Add Task</button>
        </div>

    </div>
}