import apiClient from "./services";

export default {
  getCourseById(id) {
    return apiClient.get(`/courses/${id}`);
  },
  getCourses(){
    return apiClient.get('/courses/');
  }
};
