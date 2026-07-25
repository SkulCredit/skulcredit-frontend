import axios from 'axios';
import { ENV } from '../config/env';

const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Implement token refresh logic here if needed
      // const access_token = await refreshAccessToken();
      // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      // return apiClient(originalRequest);
      
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
