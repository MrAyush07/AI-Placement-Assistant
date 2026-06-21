import axios from "axios";

const api = axios.create({
  baseURL:
    "https://ai-placement-assistant-ff16.onrender.com/api",
});

export default api;