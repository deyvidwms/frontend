import axios from "axios";

const api = axios.create({
  baseURL: "https://todobiguewapi.herokuapp.com",
  // baseURL: "http://127.0.0.1:8000",
  headers: {
    'Content-type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  },
});

export default api;