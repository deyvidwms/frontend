import axios from "axios";

const api = axios.create({
  baseURL: "https://todobiguewapi.herokuapp.com",
  // baseURL: "http://127.0.0.1:8000",
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;