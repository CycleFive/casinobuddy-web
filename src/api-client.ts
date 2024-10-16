import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const apiClient = applyCaseMiddleware(axios.create({
  baseURL: '/api',
  timeout: 25_000,
}));

export default apiClient;
