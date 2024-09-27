<script setup>
import { ref, defineProps, defineEmits } from "vue";

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

// Handle Edit Course
const editCourse = (id) => {
  console.log(`Edit course with id: ${id}`);
};

// Handle Delete Course
const deleteCourse = (id) => {
  console.log(`Delete course with id: ${id}`);
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
              style="margin-left: 30px"
            >
              Delete
            </v-btn>
          </template>
        </v-hover>
      </template>
    </v-data-table-server>
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
