import { Server } from "socket.io";
import { addTask } from "../services/taskService";

export const handleSockets = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("add", async (content) => {
      await addTask(content);
      io.emit("taskAdded", { id: Date.now(), content });
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
  });
};
