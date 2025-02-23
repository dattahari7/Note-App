import axios from "axios";

export const fetchTasks = async () => {
  const apiUrl = process.env.NOTE_APP_API_URL || "http://localhost:5000/api";
  const res = await axios.get(`${apiUrl}/fetchAllTasks`);
  return res.data;
};
