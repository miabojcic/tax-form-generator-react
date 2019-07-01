import axios from 'axios';
import { auth } from './auth';

const baseUrl = 'http://localhost:5000';

const headers = {
  'Content-Type': 'application/json'
};

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth.accessToken()}`
});

const http = {
  post: <T>(url: string, data: any) => {
    return axios.post<T>(`${baseUrl}/${url}`, data, { headers });
  },
  get: <T>(url: string) => {
    return axios.get<T>(`${baseUrl}/${url}`, { headers });
  }
};

const authHttp = {
  post: <T>(url: string, data: any) => {
    return axios.post<T>(`${baseUrl}/${url}`, data, { headers: getAuthHeaders() });
  },
  get: <T>(url: string) => {
    return axios.get<T>(`${baseUrl}/${url}`, { headers: getAuthHeaders() });
  }
};

export { http, authHttp };
