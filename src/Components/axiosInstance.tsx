// src/api/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('jwt');
    console.log(`Token being added to request: ${token}`); // For debugging
    if (token) {
      config.headers['Authorization'] = token;
    } else {
      console.log('No token found in sessionStorage');
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  

export default axiosInstance;
