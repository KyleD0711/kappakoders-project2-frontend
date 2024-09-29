<script setup>
import { ref, defineEmits } from "vue";
import { debounce } from "lodash";

const emit = defineEmits(["text-change"]);

const searchText = ref("");
const selectedSearchColumn = ref("name");
const select = ref([
  {
    text: "Id",
    value: "id",
  },
  {
    text: "Dept",
    value: "dept",
  },
  {
    text: "CourseNumber",
    value: "courseNumber",
  },
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Level",
    value: "level",
  },
  {
    text: "Hours",
    value: "hours",
  },
  {
    text: "Description",
    value: "description",
  },
]);

const debouncedEmit = debounce(() => {
  emit("text-change", searchText.value, selectedSearchColumn.value);
}, 800);

const handleTextChange = () => {
  debouncedEmit();
};
</script>

<template>
  <div id="search-bar" class="w-100 search-bar">
    <v-toolbar :elevation="8" class="mx-auto my-2 pa-2 w-75 rounded-lg">
      <v-text-field
        class="ma-2 w-75"
        label="Search"
        variant="outlined"
        placeholder="Type to search..."
        prepend-inner-icon="mdi-magnify"
        v-model="searchText"
        hide-details
        single-line
        @input="handleTextChange"
      ></v-text-field>
      <v-select
        v-model="selectedSearchColumn"
        :items="select"
        item-title="text"
        item-value="value"
        variant="solo-filled"
        hide-details
        class="my-auto"
        @update:model-value="handleTextChange"
      ></v-select>
    </v-toolbar>
  </div>
</template>

<style scoped>
.search-bar {
  margin-top: 70px; 
}
</style>