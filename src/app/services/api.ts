import axios from "axios";
// Components
// Config
import { localStorageKeys } from "../config/localStorageKeys";
// Utils
import { useNavigate } from "react-router-dom";
import { generateNewTokens } from "../utils/generateNewTokens";
import { sleep } from "../utils/sleep";

export const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
});

// BEFORE REQUEST
api.interceptors.request.use(
  async (config) => {
    // Set accessToken on Authorization
    const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      window.location.href = "/";
    }

    await sleep(500);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// AFTER REQUEST
api.interceptors.response.use(undefined, async ({ config, response }) => {
  const navigate = useNavigate();
  // 
  const msgError = response.data?.errors;
  const customError = msgError;
  const originalRequest = config;

  if (response.status === 401) {
    try {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");
  
      if (!accessToken || !refreshToken) throw new Error("ERR");
      
      // Check and generate new tokens by refresh token
      const newTokens = await generateNewTokens(accessToken, refreshToken);
      
      if (!newTokens) throw new Error("ERR");

      const { newAccessToken, newRefreshToken } = newTokens;

      localStorage.setItem("access_token", newAccessToken);
      localStorage.setItem("refresh_token", newRefreshToken);

      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

      return axios(originalRequest);
    } catch (err) {
      window.localStorage.removeItem("access_token");
      window.localStorage.removeItem("refresh_token");

      navigate("/signin");
    }
  }

  return Promise.reject(customError);
});
