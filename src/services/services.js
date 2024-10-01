import axios from "axios";

var baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3011";
} else {
  baseUrl = "/course-t1";
}
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
