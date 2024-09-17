<script setup>
import { ref } from "vue";
import courseServices from "@/services/courseServices";

const searchText = ref("");
const selectedSearchColumn = ref(null);

/* exported variableName */
const updateSearchQuery = () => {
  courseServices
    .getCourseById(1)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <div id="courses-list-view">
    <v-toolbar dense floating class="ma-2 pa-2">
      <v-text-field
        class="ma-2"
        style="width: 80%"
        label="Search"
        variant="outlined"
        placeholder="Type to search..."
        prepend-inner-icon="mdi-magnify"
        v-model="searchText"
        @input="updateSearchQuery"
        hide-details
        single-line
      ></v-text-field>
      <v-select
        v-model="selectedSearchColumn"
        :items="['Id', 'Name', 'Number']"
        variant="solo-filled"
      ></v-select>
    </v-toolbar>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
