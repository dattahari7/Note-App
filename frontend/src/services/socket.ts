import { io } from "socket.io-client";

export const socket = io(
  process.env.NOTE_APP_SOCKET_URL || "http://localhost:5000"
);
