import Redis from "ioredis";
import { REDIS_HOST, REDIS_PORT, REDIS_USER, REDIS_PASSWORD } from "./env";

export const redis = new Redis({
  host: REDIS_HOST,
  port: Number(REDIS_PORT),
  username: REDIS_USER,
  password: REDIS_PASSWORD,
});
