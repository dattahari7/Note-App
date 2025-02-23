import dotenv from "dotenv";
dotenv.config();

export const {
  PORT,
  MONGO_URL,
  DB_NAME,
  COLLECTION_NAME,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_USER,
  REDIS_PASSWORD,
} = process.env;
