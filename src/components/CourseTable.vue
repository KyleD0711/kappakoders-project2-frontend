<script setup>
import { ref, onMounted } from 'vue';
import courseServices from '../services/courseServices';
//const courseId = 123; // Replace with the actual course ID you want to fetch

const courses = ref([]);

const fetchCourses = async () => {
  try {
    const response = await courseServices.getCourses();
    console.log(response.data);
    courses.value = response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

onMounted(() => {
  console.log("Fetching");
  fetchCourses();
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Department</th>
        <th>Course Number</th>
        <th>Level</th>
        <th>Hours</th>
        <th>Name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="course in courses" :key="course.id">
        <td>{{ course.dept }}</td>
        <td>{{ course.courseNumber }}</td>
        <td>{{ course.level }}</td>
        <td>{{ course.hours }}</td>
        <td>{{ course.name }}</td>
        <td>{{ course.description }}</td>
        <td>
          
          <v-btn @click="editCourse(course.id)" color="grey">Edit</v-btn>
          <v-hover v-slot:default="{ isHovering, props }">
            <v-btn
              v-bind="props"
              @click="deleteCourse(course.id)"
              :color="isHovering ? 'red' : 'grey'"
            >
              Delete
            </v-btn>
          </v-hover>

        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  padding-left: 20px; 
  padding-right: 20px; 
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}



</style>
