import axios from "axios";

var baseURL = "http://localhost:3011";
var headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Origin": "*",
  crossDomain: true,
};

const apiClient = axios.create({
  baseURL: baseURL,
  headers: headers,
});

export default apiClient;
