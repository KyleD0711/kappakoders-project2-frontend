<template>
    <div v-if="showMessage" class="notification">{{ message }}</div>
</template>

<script setup>

import {ref} from 'vue';

const showMessage = ref(false);
const message = ref('');

const triggerMessage = (msg) => {
    message.value = msg;
    showMessage.value = true;
    setTimeout(() => {
        showMessage.value = false;
    }, 2000);
};

defineExpose({ triggerMessage });
</script>

<style scoped>
.notification {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #72162c;
  color: white;
  text-align: center;
  padding: 1em;
  z-index: 999;
}

</style>