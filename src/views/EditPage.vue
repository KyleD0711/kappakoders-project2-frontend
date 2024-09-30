<template>
 
  <edit-form :id="$route.params.id"></edit-form>
</template>


<script setup>
//import OCHeader from "@/components/OCHeader.vue";

</script>

<script>
import EditForm from 'C:/xampp/htdocs/KK Project2/kappakoders-project2-frontend/src/components/CourseEditForm.vue'

export default {
  components: {
    EditForm,
  }
};
</script>


<style scoped>

</style>