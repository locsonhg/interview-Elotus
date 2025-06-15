import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_TOKEN_API,
  },
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
});

export default axiosClient;
