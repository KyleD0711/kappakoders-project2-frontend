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
  createCourse(params) {
    return apiClient.post(`/courses`, params)
  },
  updateCourse(id, params) {
    return apiClient.put(`/courses/${id}`, params)
  },
  deleteCourse(id) {
    return apiClient.delete(`/courses/${id}`);
  }
};
