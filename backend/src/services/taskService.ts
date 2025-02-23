import { redis } from "../config/redis";
import { Task } from "../models/Task";

const CACHE_KEY = `FULLSTACK_TASK_DATTAHARI`;

export const addTask = async (content: string) => {
  let tasks = JSON.parse((await redis.get(CACHE_KEY)) || "[]");
  tasks.push({ id: Date.now(), content });

  if (tasks.length > 50) {
    await Task.insertMany(tasks);
    await redis.del(CACHE_KEY);
  } else {
    await redis.set(CACHE_KEY, JSON.stringify(tasks));
  }
};

export const getTasks = async () => {
  let tasks = JSON.parse((await redis.get(CACHE_KEY)) || "[]");
  const dbTasks = await Task.find({});
  return [...dbTasks, ...tasks];
};
