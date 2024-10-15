import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const apiClient = applyCaseMiddleware(axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    xCasinobuddyClient: 'web',
  },
}));

export default apiClient;
