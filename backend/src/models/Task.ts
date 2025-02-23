import mongoose from "mongoose";
import { COLLECTION_NAME } from "../config/env";

const TaskSchema = new mongoose.Schema({
  content: String,
});

export const Task = mongoose.model(COLLECTION_NAME as string, TaskSchema);
