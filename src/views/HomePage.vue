<script setup>
import CoursesDataTable from "@/components/CoursesDataTable.vue";
import OCHeader from "@/components/OCHeader.vue";


import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const showNotification = ref(false);
const notificationMessage = ref('');

onMounted(() => {
  if (route.query.message) {
    console.log(route.query.message);
    notificationMessage.value = route.query.message;
    showNotification.value = true;

    // Hide notification after 2 seconds
    setTimeout(() => {
      showNotification.value = false;
    }, 2000);
  }
});
</script>

<template>
  <notification-bar v-if="showNotification" :message="notificationMessage" />

  <OCHeader/>
  <CoursesDataTable />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

