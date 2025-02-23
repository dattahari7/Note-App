import React from "react";

interface TaskListProps {
  tasks: { id: number; content: string }[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="mt-4">
      <h2 className="font-semibold">Notes</h2>
      <div className="border-t mt-2 max-h-40 overflow-y-auto">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="p-2 border-b">
              {task.content}
            </div>
          ))
        ) : (
          <p className="text-gray-500 p-2">No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
