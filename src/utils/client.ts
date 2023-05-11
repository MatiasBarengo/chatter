import axios from 'axios';

const apiClient = axios.create({
  // URL para variable de entorno
  baseURL: 'http://localhost:8080'
});

apiClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config!.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
