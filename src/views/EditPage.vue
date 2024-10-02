<template>
 <OCHeader></OCHeader>
  <edit-form :id="$route.params.id"></edit-form>
</template>


<script setup>
import OCHeader from "@/components/OCHeader.vue";

</script>

<script>
import EditForm from '@/components/CourseEditForm.vue'

export default {
  components: {
    EditForm,
  }
};
</script>


<style scoped>

</style>