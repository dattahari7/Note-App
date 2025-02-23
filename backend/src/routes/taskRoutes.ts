import { Router } from "express";
import { fetchTasks } from "../controllers/taskController";

const router = Router();
router.get("/fetchAllTasks", fetchTasks);

export default router;
