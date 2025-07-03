import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Input from "./Input";
const Tasks = () => {
  const initial_task = [

  ];
  const [tasks, setTasks] = useState(initial_task);
  const addTaskHandler = async (newTask) => {
    let newTaskObj = {
      task_id: Math.random(),
      task_name: newTask

    };
    const response = await fetch("https://todo-backend-ke6w.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify(newTaskObj),
    })
    if (response.status === 201) {
      getTasks();
      alert("NEW TASKS ADDED");
    }
    else {
      alert("couldnt add the task");
    }
  }

  const deleleTaskHandler = async (taskId) => {
    const response = await fetch("https://todo-backend-ke6w.onrender.com" + taskId, {
      method: "DELETE"
    })
    if (response.status === 200) {
      getTasks();
      alert("Task deleted")
    } else {
      alert("Failed to delete")
    }
  }

  const getTasks = async () => {
    const response = await fetch("https://todo-backend-ke6w.onrender.com");
    const taskList = await response.json();
    console.log(taskList)
    setTasks(taskList)
  }
  useEffect(() => {
    getTasks();
  },
    [])

  return (
    <div id="tasks">
      <Input onAddTask={addTaskHandler} />

      {
        tasks.map((tk) => (

          <Card task={tk}
            onDeleteTask={deleleTaskHandler} />

        ))
      }

    </div>
  )
}

export default Tasks;