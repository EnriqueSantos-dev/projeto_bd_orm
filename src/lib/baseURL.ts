import axios from 'axios';

export const htpp = axios.create({
  baseURL: 'http://localhost:3000',
});
