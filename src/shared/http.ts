import axios from 'axios';
import { SettingsData } from '../settings/settings-data';

const baseUrl = 'http://localhost:5000';

const accessToken = localStorage.getItem('accessToken');

const headers = {
    "Content-Type": "application/json"
};

const authHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
}

const http = {
    post: (url: string, data: any) => {
        return axios.post<any>(`${baseUrl}/${url}`, data, { headers });
    },
    get: (url: string) => {
        return axios.get<any>(`${baseUrl}/${url}`, { headers });
    }
};

const authHttp = {
    post: (url: string, data: any) => {
        return axios.post<any>(`${baseUrl}/${url}`, data, { headers: authHeaders });
    },
    get: (url: string) => {
        return axios.get<SettingsData>(`${baseUrl}/${url}`, { headers: authHeaders });
    }
};

export {
    http,
    authHttp
}
