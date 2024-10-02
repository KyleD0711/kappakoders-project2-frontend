<script setup>
import { ref, defineProps, defineEmits } from "vue";
import router from '@/router.js'
import courseServices from "@/services/courseServices";



const emit = defineEmits(["updated-value"]);

const props = defineProps({
  courses: {
    type: Array,
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
  },
});

// Local, mutable references for pagination
const localCurrentPage = ref(1);
const localPerPage = ref(10);

// Table headers
const headers = ref([
  { text: "Department", value: "dept", align: "start" },
  { text: "Course Number", value: "courseNumber", align: "start" },
  { text: "Level", value: "level", align: "start" },
  { text: "Hours", value: "hours", align: "start" },
  { text: "Name", value: "name", align: "start" },
  { text: "Description", value: "description", align: "start" },
  { text: "Actions" },
]);

//Handle Add Course 
const addCourse = () => {
  router.push({ name: 'add-course-page' });
};

// Handle Edit Course
const editCourse = (item) => {
  console.log(`Edit course with id: ${item.id}`);

  console.log(item);

  router.push({
    name: 'edit-course-page',
    params: {
      id: item.id,
    }
  });

};
//Change
// Handle Delete Course
const deleteCourse = (id) => {
  console.log(`Delete course with id: ${id}`);
  courseServices.deleteCourse(id)
  router.push({
      name: 'home-page',
    }).then(() => {
      window.location.reload()
    });
  
};
// Emit updated value when page or items-per-page changes
const handlePageChanged = (newPage) => {
  localCurrentPage.value = newPage;
  emit("updated-value", { page: newPage, perPage: localPerPage.value });
};

const handleItemsPerPageChanged = (newPerPage) => {
  localPerPage.value = newPerPage;
  emit("updated-value", { page: localCurrentPage.value, perPage: newPerPage });
};
</script>

<template>
  <v-container>
    <v-data-table-server
      :headers="headers.value"
      :items="props.courses"
      :items-per-page="localPerPage"
      :page="localCurrentPage"
      :items-length="props.totalCount"
      :items-per-page-options="[5, 10, 25, 50]"
      disable-sort="true"
      class="elevation-1"
      @update:page="handlePageChanged"
      @update:items-per-page="handleItemsPerPageChanged"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Courses</v-toolbar-title>
          <v-btn
            @click="addCourse()"
            class="addBtn">
            Add course
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div style="display: flex; align-items: center;">
          <v-btn
            icon
            small
            flat
            class="pa-0"
            @click="editCourse(item)">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            icon
            small
            flat
            class="pa-0"
            @click="deleteCourse(item.id)">
            <v-icon small>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table-server>
  </v-container>
</template>

