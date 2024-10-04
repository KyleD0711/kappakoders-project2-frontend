<template>
 <OCHeader></OCHeader>
  <edit-form @submit="handleSubmit"></edit-form>
</template>


<script setup>
import OCHeader from "@/components/OCHeader.vue";

</script>

<script>
import { ref } from 'vue';
import AnnouncementBar from '@/components/announcementBar.vue';  // Adjust the path
import EditForm from '@/components/CourseEditForm.vue'

import { useRouter } from 'vue-router';
const router = useRouter();
const announcementBar = ref(null);


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