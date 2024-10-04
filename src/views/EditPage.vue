<template>
 <OCHeader></OCHeader>
  <edit-form :id="$route.params.id" @submitted="handleSubmit"></edit-form>
</template>


<script setup>
import OCHeader from "@/components/OCHeader.vue";

</script>

<script>
import EditForm from '@/components/CourseEditForm.vue'

import { useRouter } from 'vue-router';
const router = useRouter();

export default {
  components: {
    EditForm,
  }
};

const handleSubmit = (message) => {
  // Emit the notification event and navigate back to home
  router.push({ name: 'home-page',  query: { message: message } }).then(() => {
    router.go(0);  // Optional: refresh page to load updated data
  });
};

</script>


<style scoped>

</style>