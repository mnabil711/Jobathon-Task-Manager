import { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ name, description, taskStatus, deleteTask }) => {
  let color = "";
  if (taskStatus === "In Progress") {
    color = "text-danger";
  } else if (taskStatus === "Finished") {
    color = "text-success";
  }

  const [isEditing, setIsEditing] = useState(false);

  const [editedTask, setEditedTask] = useState({
    name: name,
    description: description,
    taskStatus: taskStatus,
  });


  const handleEdit = () => {
    setIsEditing(true);
  };
    
  const handleUpdetedTask=(task)=>{
    setEditedTask(task)
    setIsEditing(false)
  }

  return (
    <div>

{isEditing ? (
  <>
  <h1>{editedTask.name}</h1>
   <EditTask updetedTask={handleUpdetedTask} />
   </>
):(
      <div>
        <h1>{editedTask.name}</h1>
        <p>{editedTask.description}</p>
        <h5 className={color}>{editedTask.taskStatus}</h5>
        <button
        className="btn btn-success"
        type="button"
        id="button-addon2"
        onClick={handleEdit}
      >
        Edit
      </button>
      </div>
)}
     

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
