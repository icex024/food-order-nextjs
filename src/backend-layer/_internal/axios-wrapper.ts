import axios from "axios";
import tokenStorage from "./redux/session/tokenStorage";

const NEXT_PUBLIC_BACKEND_API_URL = "http://localhost:8080/api/v1"; //ovo namesti lepo kad dokerizujes

const defaultHeaders = {
  accept: "application/json",
  "content-type": "application/json",
};

const defaultHeadersWithFile = {
  accept: "multipart/form-data",
  "content-type": "multipart/form-data",
};

let axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    ...defaultHeaders,
  },
});

let axiosInstanceWithFile = axios.create({
  baseURL: NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    ...defaultHeadersWithFile,
  },
});

export function setAuthToken(token: string) {
  axiosInstance = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_API_URL,
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}
export function setAuthTokenFile(token: string) {
  axiosInstanceWithFile = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_API_URL,
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getAxios(file?: boolean) {
  return file ? axiosInstanceWithFile : axiosInstance;
}
