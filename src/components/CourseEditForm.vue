<script setup>
import { ref, defineProps, onMounted } from "vue";
import router from "@/router.js";

import courseServices from "@/services/courseServices";

const props = defineProps({
  id: {
    type: Number,
    required: false,
    default: -1,
  },
});

const editData = ref({
  dept: "",
  courseNumber: "",
  level: "",
  hours: "",
  name: "",
  desc: "",
});

onMounted(async () => {
  if (props.id !== -1) {
    try {
      const response = await courseServices.getCourseById(props.id);
      const course = response.data;

      console.log(response.data);

      // Populate editData with the course information
      editData.value = {
        dept: course.dept,
        courseNumber: course.courseNumber,
        level: course.level,
        hours: course.hours,
        name: course.name,
        description: course.description,
      };
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  }
});

const submitForm = async () => {
  // Logic to handle form submission, e.g., update or save course
  console.log("Form submitted with:", editData.value);

  if (
    editData.value.dept == "" ||
    editData.value.courseNumber == "" ||
    editData.value.level == "" ||
    editData.value.hours == "" ||
    editData.value.name == ""
  ) {
    alert("Please input all required fields");
  } else {
    if (props.id !== -1) {
      courseServices
        .updateCourse(props.id, editData.value)
        .then(() => {
          router.push({
            name: "home-page",
          });
        })
        .catch((err) => {
          alert(
            `Failed to submit the course: ${err.message}. Please check your data and try again.`
          );
        });
    } else {
      courseServices
        .createCourse(editData.value)
        .then(() => {
          router.push({
            name: "home-page",
          });
        })
        .catch((err) => {
          console.log(err);
          alert(
            `Failed to submit the course: ${err.message}. Please check your data and try again.`
          );
        });
    }
  }
};

const goBack = () => {
  router.push({
    name: "home-page",
  });
};
</script>

<template>
  <v-form @submit.prevent="submitForm">
    <div class="field-name">Department *</div>
    <v-text-field
      label="Enter Department"
      v-model="editData.dept"
      outlined
    ></v-text-field>

    <div class="field-name">Course Number *</div>
    <v-text-field
      label="Enter Course Number"
      v-model="editData.courseNumber"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Level *</div>
    <v-text-field
      label="Enter Course Level"
      v-model="editData.level"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Hours *</div>
    <v-text-field
      label="Enter Course Hours"
      v-model="editData.hours"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Name *</div>
    <v-text-field
      label="Enter Course Name"
      v-model="editData.name"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Description:</div>
    <v-text-field
      label="Enter Course Description"
      v-model="editData.description"
      class="field-edit"
      outlined
    ></v-text-field>

    <v-btn class="cancel" color="primary" type="cancel" @click="goBack()"
      >Cancel</v-btn
    >
    <v-btn class="sub-btn" color="primary" type="submit">Submit</v-btn>
  </v-form>
</template>

<style scoped>
.v-form {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
}

.v-btn {
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
}

.cancel {
  background-color: #7d2534 !important;
}
</style>
