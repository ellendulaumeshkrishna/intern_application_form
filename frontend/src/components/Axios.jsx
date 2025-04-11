import axios from "axios";


const baseUrl='http://127.0.0.1:8000/'

const AxiosInstance = axios.create({
    baseURL:baseUrl,
    timeout:5000,
    headers:{
        "Content-Type":"application/json",
        accept:"application/json"
    }
})

AxiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("Token");
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  

export default AxiosInstance