import axios from "axios";

const api = axios.create({
  baseURL: "api_live_tFY2u5eefYBWxENhiz5zEhft0ZjIkMCSUP4vIIsjWKdaEYt",
  // baseURL:
  //   import.meta.env.VITE_API_BASE_URL ||
  //   "api_live_tFY2u5eefYBWxENhiz5zEhft0ZjIkMCSUP4vIIsjWKdaEYt",
});

api.interceptors.request.use(
  (config) => {
    // const apiKey = import.meta.env.VITE_API_TUBE_KEY || "/api/v1/news";
    const apiKey = "/api/v1/news";

    config.params = {
      ...config.params,
      api_key: apiKey,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
