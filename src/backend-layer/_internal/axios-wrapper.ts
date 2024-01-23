import axios from "axios";
import tokenStorage from "./redux/session/tokenStorage";

const NEXT_PUBLIC_BACKEND_API_URL = "http://localhost:8080/api/v1"; //ovo namesti lepo kad dokerizujes

const defaultHeaders = {
  accept: "application/json",
  "content-type": "application/json",
};

let axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    ...defaultHeaders,
  },
});

export function setAuthToken(token: string) {
  console.log("uslo u auth");
  axiosInstance = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_API_URL,
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getAxios() {
  return axiosInstance;
}
