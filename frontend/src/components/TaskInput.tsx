import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const handleAddTask = () => {
    if (!taskContent.trim()) return;

    onAddTask(taskContent);
    setTaskContent("");
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="New Note..."
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        className="border p-2 flex-1 rounded-md"
      />
      <button
        onClick={handleAddTask}
        className="bg-[#914c2d] text-white px-4 py-2 rounded-md"
      >
        + Add
      </button>
    </div>
  );
};

export default TaskInput;
