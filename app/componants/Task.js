import EditTask from "./EditTask";

const Task = ({ name, description, taskStatus, deleteTask }) => {
  let color = "";
  if (taskStatus === "In Progress") {
    color = "text-danger";
  } else if (taskStatus === "Finished") {
    color = "text-success";
  }

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <h5 className={color}>{taskStatus}</h5>
      </div>

      <EditTask />

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
