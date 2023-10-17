"use client";

import { useState } from "react";

const EditTask = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    taskStatus: "",
  });
  const [nameInputValue, setNameInputValue] = useState("");
  const [descInputValue, setDescInputValue] = useState("");
  const [statusInputValue, setStatusInputValue] = useState("");

  const handleEditTask = () => {
    nameInputValue && descInputValue && statusInputValue !== ""
      ? setTask({
          name: nameInputValue,
          description: descInputValue,
          taskStatus: statusInputValue,
        })
      : null;
    setNameInputValue("");
    setDescInputValue("");
    setStatusInputValue("");
    console.log(task);
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

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task Name"
        aria-label="Enter Task Name"
        value={nameInputValue}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Enter Task Description"
        aria-label="Enter Task Description"
        value={descInputValue}
        onChange={handleDescChange}
      />
      <input
        type="text"
        placeholder="Enter Task Status"
        aria-label="Enter Task status"
        value={statusInputValue}
        onChange={handleStatusChange}
      />

      <button
        className="btn btn-success"
        type="button"
        id="button-addon2"
        onClick={handleEditTask}
      >
        Edit
      </button>
    </div>
  );
};

export default EditTask;
