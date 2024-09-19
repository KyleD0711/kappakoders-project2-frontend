import apiClient from "./services";

export default {
  getCourseById(id) {
    return apiClient.get(`/courses/${id}`);
  },
};
