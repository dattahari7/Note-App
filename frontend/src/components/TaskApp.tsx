import React, { useEffect, useState } from "react";
import { fetchTasks } from "../services/api";
import { socket } from "../services/socket";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Header from "./Header";

interface Task {
  id: number;
  content: string;
}

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then(setTasks);

    socket.on("taskAdded", (newTask: Task) => {
      setTasks((prev) => [...prev, newTask]);
    });

    return () => {
      socket.off("taskAdded");
    };
  }, []);

  const addTask = (taskContent: string) => {
    if (!taskContent.trim()) return;
    socket.emit("add", taskContent);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-xl w-96">
        <Header />
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskApp;
