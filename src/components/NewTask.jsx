import Button from "./Button.jsx";
import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick(event) {
    if (!enteredTask) {
      return;
    }
    setEnteredTask("");
    onAddTask(enteredTask);
  }

  return (
    <div className="flex items-center justify-between">
      <input
        onChange={handleChange}
        type="text"
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <Button onClick={handleClick}>Add task</Button>
    </div>
  );
}
