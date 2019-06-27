import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const accessToken = localStorage.getItem('accessToken');

const headers = {
  'Content-Type': 'application/json'
};

const authHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${accessToken}`
};

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
    return axios.post<T>(`${baseUrl}/${url}`, data, { headers: authHeaders });
  },
  get: <T>(url: string) => {
    return axios.get<T>(`${baseUrl}/${url}`, { headers: authHeaders });
  }
};

export { http, authHttp };
