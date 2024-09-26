import apiClient from "./services";

export default {
  getCourseById(id) {
    return apiClient.get(`/courses/${id}`);
  },
  getCourses() {
    return apiClient.get('/courses/');
  },
  getCoursesByPage(page, perPage) {
    return apiClient.get(`/courses?page=${page}&perPage=${perPage}`);
  }
};
