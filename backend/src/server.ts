import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { connectDB } from "./config/db";
import { handleSockets } from "./sockets/taskSocket";
import taskRoutes from "./routes/taskRoutes";
import { PORT } from "./config/env";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
handleSockets(io);

connectDB();
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
