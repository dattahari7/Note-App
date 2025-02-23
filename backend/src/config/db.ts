import mongoose from "mongoose";
import { MONGO_URL, DB_NAME } from "./env";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGO_URL}${DB_NAME}`);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
  }
};
