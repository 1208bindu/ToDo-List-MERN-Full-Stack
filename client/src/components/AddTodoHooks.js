import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTodoHooks = () => {
  const { addTodos } = useContext(GlobalContext);
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos({ job });
    setJob("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add New To Do</label>
        <input
          type="text"
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTodoHooks;
