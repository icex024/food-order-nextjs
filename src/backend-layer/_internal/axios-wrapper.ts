import axios from "axios";

const defaultHeaders = {
  accept: "application/json",
  "content-type": "application/json",
};

let axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    ...defaultHeaders,
  },
});

export function setAuthToken(token: string) {
  axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getAxios() {
  return axiosInstance;
}
