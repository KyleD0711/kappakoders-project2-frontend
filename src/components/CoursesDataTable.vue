<script setup>
import SearchBar from "@/components/SearchBar.vue";
import CourseTable from "@/components/CourseTable.vue";
import courseServices from "@/services/courseServices";
import { ref, onMounted } from "vue";

const courses = ref([]);
const perPage = ref(10);
const currentPage = ref(1);
const totalCourses = ref(0);
const searchString = ref("");
const filterColumn = ref("");

const getData = () => {
  courseServices
    .searchCourses({
      searchString: searchString.value,
      searchColumn: filterColumn.value,
      page: currentPage.value,
      perPage: perPage.value,
    })
    .then((response) => {
      courses.value = response.data.courses.map((course) => {
        var newCourses = {
          ...course,
          actions: [], // Placeholder if you need to add additional data related to actions
        };
        return newCourses;
      });
      totalCourses.value = response.data.count;
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleTextChange = (searchText, column) => {
  searchString.value = searchText;
  filterColumn.value = column;
  getData();
};

const handleUpdateValue = (data) => {
  currentPage.value = data.page;
  perPage.value = data.perPage;
  getData();
};

onMounted(() => {
  getData();
});
</script>

<template>
  <SearchBar
    :filter-column="filterColumn"
    :search-string="searchString"
    @text-change="handleTextChange"
  ></SearchBar>
  <CourseTable
    :courses="courses"
    :current-page="currentPage"
    :per-page="perPage"
    :total-count="totalCourses"
    @updated-value="handleUpdateValue"
  ></CourseTable>
</template>
