import { useEffect, useState } from "react";
import EditTask from "./EditTask";

const Task = ({ name, description, taskStatus, deleteTask }) => {
  let color = "";
  if (taskStatus === "In Progress") {
    color = "text-danger";
  } else if (taskStatus === "Finished") {
    color = "text-success";
  }

  const [editedTask, setEditedTask] = useState({
    name: name,
    description: description,
    taskStatus: taskStatus,
  });

  return (
    <div>
      <div>
        <h1>{editedTask.name}</h1>
        <p>{editedTask.description}</p>
        <h5 className={color}>{editedTask.taskStatus}</h5>
      </div>

      <EditTask edited={editedTask} />

      <button
        className="btn btn-danger"
        type="button"
        id="button-addon2"
        onClick={() => {
          deleteTask(name);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
