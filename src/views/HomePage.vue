<script setup>
import SearchBar from "@/components/SearchBar.vue";

const handleTextChange = (searchQuery, filterColumn) => {
  console.log(searchQuery, filterColumn);
};
</script>

<template>
  <div id="courses-list-view">
    <SearchBar @text-change="handleTextChange"></SearchBar>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
