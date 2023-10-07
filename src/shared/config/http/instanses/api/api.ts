import axios from "axios";

export const $api = axios.create({
  baseURL: __API_URL__,
});

// $api.interceptors.request.use((config) => {
//   config.headers["X-User-Id"] = localStorage.getItem(LS_QN);
//   config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN)}`;
//   return config;
// });
