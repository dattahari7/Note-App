import { Request, Response } from "express";
import { getTasks } from "../services/taskService";

export const fetchTasks = async (req: Request, res: Response) => {
  const tasks = await getTasks();
  res.json(tasks);
};
