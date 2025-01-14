import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    config.params = {
      ...config.params,
      apiKey: apiKey,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
