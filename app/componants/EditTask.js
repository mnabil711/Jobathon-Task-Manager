"use client";

import React, { useState } from "react";

const EditTask = ({ updetedTask }) => {
  const [editedTask, setEditedTask] = useState({
    name: "",
    description: "",
    taskStatus: "",
  });
  
  const [nameInputValue, setNameInputValue] = useState("");
  const [descInputValue, setDescInputValue] = useState("");
  const [statusInputValue, setStatusInputValue] = useState("");

  const updetTask = () => {
    if (nameInputValue !== "" && descInputValue !== "" && statusInputValue !== "") {
      setEditedTask({
        name: nameInputValue,
        description: descInputValue,
        taskStatus: statusInputValue,
      });
    }

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

  return (
    <div>
      <input
        type="text"
        placeholder="Edit Task Name"
        aria-label="Edit Task Name"
        value={nameInputValue}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Edit Task Description"
        aria-label="Edit Task Description"
        value={descInputValue}
        onChange={handleDescChange}
      />
      <input
        type="text"
        placeholder="Edit Task Status"
        aria-label="Edit Task status"
        value={statusInputValue}
        onChange={handleStatusChange}
      />

      <button
        className="btn btn-success"
        type="button"
        id="button-addon2"
        onClick={() => {
          updetTask();
          console.log(editedTask);
          updetedTask(editedTask);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditTask;
