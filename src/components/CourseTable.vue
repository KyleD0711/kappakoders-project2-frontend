<script setup>
import { ref, onMounted } from 'vue';
import courseServices from '../services/courseServices'; // Assuming courseServices is correctly set up

// Reactive variables
const courses = ref([]);
const currentPage = ref(6);
const perPage = ref(10);
const totalCourses = ref(0);

// Table headers
const headers = ref([
  { text: "Department", value: 'dept', align: 'start' },
  { text: "Course Number", value: 'courseNumber', align: 'start' },
  { text: "Level", value: 'level', align: 'start' },
  { text: "Hours", value: 'hours', align: 'start' },
  { text: "Name", value: 'name', align: 'start' },
  { text: "Description", value: 'description', align: 'start' },
  { text: "Actions" }
]);

// Fetch paginated courses
const fetchCourses = async (page = 6, perPage = 10) => {
  try {
    const response = await courseServices.getCoursesByPage(page, perPage); 
    courses.value = response.data.map(course => ({
      ...course,
      actions: [] // Placeholder if you need to add additional data related to actions
    }));     totalCourses.value = response.data.total; 

    console.log('Headers:', headers.value);
    console.log('Courses:', courses.value);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

// Handle Edit Course
const editCourse = (id) => {
  console.log(`Edit course with id: ${id}`);
};

// Handle Delete Course
const deleteCourse = (id) => {
  console.log(`Delete course with id: ${id}`);
};

// Fetch courses on component mount
onMounted(() => {
  console.log(currentPage.value);
  console.log(perPage.value)
  fetchCourses(currentPage.value, perPage.value);
});
</script>

<template>
  <v-container>
    <v-data-table
      :headers="headers.value"  
      :items="courses"    
      :items-per-page="perPage"
      v-model:page="currentPage"
      :server-items-length="totalCourses"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Courses</v-toolbar-title>
        </v-toolbar>
      </template>

      <!-- Custom actions column (Edit, Delete buttons) -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn @click="editCourse(item.id)" color="grey">Edit</v-btn>
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-btn
              v-bind="props"
              @click="deleteCourse(item.id)"
              :color="isHovering ? 'red' : 'grey'"
              style="margin-left: 30px;"
            >
              Delete
            </v-btn>
          </template>
        </v-hover>
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
