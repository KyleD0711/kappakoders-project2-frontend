import apiClient from "./services";

export default {
  getCourseById(id) {
    return apiClient.get(`/courses/${id}`);
  },
  getCourses() {
    return apiClient.get("/courses/");
  },
  getCoursesByPage(page, perPage) {
    return apiClient.get(`/courses?page=${page}&perPage=${perPage}`);
  },
  searchCourses(queryParams) {
    let params = [];
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined && value !== "" && value !== null) {
        params.push(`${key}=${value}`);
      }
    }
    let baseString = `/courses`;
    if (params.length !== 0) {
      baseString += "?" + params.join("&");
    }

    return apiClient.get(baseString);
  },
};
