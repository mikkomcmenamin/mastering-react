import axios from "axios";
import { toast } from "react-toastify";
import authService from "./authService";

const instance = axios.create({
  baseURL: 'https://localhost:3900',
  timeout: 1000,
  headers: {'x-auth-token': authService.getJwt()}
});

instance.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast("something unexpected happened");
    console.log("Unexpected error:", error);
  }
  return Promise.reject(error);
});

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
};