import apiClient from "./services";

export default {
  getCourseById(id) {
    return apiClient.get(`/courses/${id}`);
  },
  getCourses() {
    return apiClient.get("/courses/");
  },
  searchCourses(queryParams) {
    let params = [];

    console.log(queryParams);
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        params.push(`${key}=${value}`);
      }
    }

    console.log(params);
    let baseString = `/courses`;
    if (params.length !== 0) {
      baseString += "?" + params.join("&");
    }

    return apiClient.get(baseString);
  },
};
