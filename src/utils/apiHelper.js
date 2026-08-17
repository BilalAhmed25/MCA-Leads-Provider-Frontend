import axios from "axios";
import { API_BASE_URL } from "../config";

const isLocal = typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '[::1]'
);

const API_URL = API_BASE_URL || (isLocal ? "http://localhost:3000" : "https://api.expertdesignhub.com");

const axiosApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
    }
});

// Request Interceptor: Automatically inject auth token if present
axiosApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('mca_token') || localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response Interceptor: Handle data and capture error responses
axiosApi.interceptors.response.use(
    (response) => response,
    (error) => {
        const customError = {
            message: error.response?.data?.message || error.message || "An unexpected error occurred",
            status: error.response?.status,
            data: error.response?.data,
            originalError: error
        };
        return Promise.reject(customError);
    }
);

/**
 * GET Request Helper
 */
export async function get(url, config = {}) {
    return await axiosApi
        .get(url, { ...config })
        .then((response) => response.data);
}

/**
 * POST Request Helper (Auto-handles JSON and FormData payloads)
 */
export async function post(url, data = {}, config = {}) {
    const isFormData = data instanceof FormData;
    return await axiosApi.post(
        url,
        isFormData ? data : { ...data },
        {
            ...config,
            headers: {
                ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
                ...(config.headers || {}),
            },
        }
    ).then((response) => response.data);
}

/**
 * PUT Request Helper (Auto-handles JSON and FormData payloads)
 */
export async function put(url, data = {}, config = {}) {
    const isFormData = data instanceof FormData;
    return await axiosApi.put(
        url,
        isFormData ? data : { ...data },
        {
            ...config,
            headers: {
                ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
                ...(config.headers || {}),
            },
        }
    ).then((response) => response.data);
}

/**
 * PATCH Request Helper
 */
export async function patch(url, data = {}, config = {}) {
    return await axiosApi
        .patch(url, { ...data }, { ...config })
        .then((response) => response.data);
}

/**
 * DELETE Request Helper
 */
export async function del(url, config = {}) {
    return await axiosApi
        .delete(url, { ...config })
        .then((response) => response.data);
}

const apiHelper = {
    get,
    post,
    put,
    patch,
    del,
    axiosApi,
    baseURL: API_URL
};

export default apiHelper;
