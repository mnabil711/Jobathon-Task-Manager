"use client";
import styles from "./page.module.css";
import Task from "./componants/Task";
import { useState } from "react";

export default function Home() {
  let tasksArr = [
    {
      name: "task-01",
      description: "doing task-01",
      taskStatus: "Finished",
    },
    {
      name: "task-02",
      description: "doing task-02",
      taskStatus: "In Progress",
    },
    {
      name: "task-03",
      description: "doing task-03",
      taskStatus: "Not Started",
    },
    {
      name: "task-04",
      description: "doing task-04",
      taskStatus: "Not Started",
    },
    {
      name: "task-05",
      description: "doing task-05",
      taskStatus: "In Progress",
    },
    {
      name: "task-06",
      description: "doing task-06",
      taskStatus: "Finished",
    },
  ];

  const [tasks, setTasks] = useState(tasksArr);
  const [nameInputValue, setNameInputValue] = useState("");
  const [descInputValue, setDescInputValue] = useState("");
  const [statusInputValue, setStatusInputValue] = useState("");

  const handleAddTask = () => {
    nameInputValue && descInputValue && statusInputValue !== ""
      ? setTasks([
          ...tasks,
          {
            name: nameInputValue,
            description: descInputValue,
            taskStatus: statusInputValue,
          },
        ])
      : null;
    setNameInputValue("");
    setDescInputValue("");
    setStatusInputValue("");
  };

  const handleNameChange = (e) => {
    setNameInputValue(e.target.value);
  };
  const handleDescChange = (e) => {
    setDescInputValue(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatusInputValue(e.target.value);
  };

  const handleDelTask = (i) => {
    let newTasks = tasks.filter((el) => el.name !== i);
    setTasks(newTasks);
  };

  return (
    <main className={styles.main}>
      <h1>Task Manager</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task Name"
          aria-label="Enter Task Name"
          value={nameInputValue}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task Description"
          aria-label="Enter Task Description"
          value={descInputValue}
          onChange={handleDescChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task Status"
          aria-label="Enter Task status"
          value={statusInputValue}
          onChange={handleStatusChange}
        />

        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div className="container">
        <ul className="list-group row">
          {tasks.map((task) => (
            <li className="list-group-item col-lg" key={task.name}>
              <Task
                name={task.name}
                description={task.description}
                taskStatus={task.taskStatus}
                deleteTask={handleDelTask}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
