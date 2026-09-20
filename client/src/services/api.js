import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // backend URL, not wired up to pages yet
});

export default api;