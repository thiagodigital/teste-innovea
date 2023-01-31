import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    q: import.meta.env.VITE_SUBJECT,
    sortBy: import.meta.env.VITE_SORT,
    language: import.meta.env.VITE_LANGUAGE,
    apiKey: import.meta.env.VITE_API_KEY,
    pageSize: import.meta.env.VITE_PAGE_SIZE,
  },
});

export default api;
