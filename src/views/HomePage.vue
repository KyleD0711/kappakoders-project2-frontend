<script setup>
import SearchBar from "@/components/SearchBar.vue";
import CourseTable from "@/components/CourseTable.vue";
import courseServices from "@/services/courseServices";
import { ref, onMounted } from "vue";

const courses = ref([]);

const handleTextChange = (searchString, filterColumn) => {
  courseServices
    .searchCourses({
      searchString,
      filterColumn,
    })
    .then((response) => {
      courses.value = response.data;
    })
    .catch((err) => {
      console.log("In error");
      console.log(err);
    });
};

onMounted(() => {
  handleTextChange();
});
</script>

<template>
  <div id="courses-list-view">
    <SearchBar @text-change="handleTextChange"></SearchBar>
    <CourseTable :courses="courses"></CourseTable>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
