import axios from "axios";

const tenantId = "your-tenant-id"; // Replace this with dynamic tenant ID if needed

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000", // Base API URL
});

// Add interceptor to attach headers
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers["x-tenant-id"] = tenantId;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;