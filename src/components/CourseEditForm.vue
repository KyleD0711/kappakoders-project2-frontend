<template>
  <v-form @submit.prevent="submitForm">
    
    <div class="field-name">Department: </div>
    <v-text-field
      label="Enter Department"
      v-model="editData.deptText"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Number: </div>
    <v-text-field
      label="Enter Course Number"
      v-model="editData.courseNumText"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Level: </div>
    <v-text-field
      label="Enter Course Level"
      v-model="editData.levelText"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Hours: </div>
    <v-text-field
      label="Enter Course Hours"
      v-model="editData.hoursText"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Name: </div>
    <v-text-field
      label="Enter Course Name"
      v-model="editData.nameText"
      class="field-edit"
      outlined
    ></v-text-field>

    <div class="field-name">Course Description: </div>
    <v-text-field
      label="Enter Course Description"
      v-model="editData.descText"
      class="field-edit"
      outlined
    ></v-text-field>

    <v-btn color="primary" type="submit">Submit</v-btn>
  </v-form>
</template>

<script>

import { axios } from "axios";
export default {
  data() {
    return {
        editData: {
            deptText: '',
            courseNumText: '',
            levelText: '',
            hoursText: '',
            nameText: '',
            descText: '',
        }
    };
  },
  methods: {
    submitForm() {
      // Logic for handling form submission
      console.log("Form submitted with: ", this.inputText);
      // You can add your own custom logic here, like making an API call
    
      try {
      // Send a PUT request to the API to update the course
      const response =  axios.put(`/api/courses/${this.$route.params.id}`, {
        dept: this.editData.deptText,
        courseNumber: this.editData.courseNumText,
        level: this.editData.levelText,
        hours: this.editData.hoursText,
        name: this.editData.nameText,
        description: this.editData.descText,
      });

      console.log("Course successfully updated:", response.data);
      // Optionally, redirect or reset the form
      this.$router.push('/'); // Redirect to the home page or wherever needed
    } catch (error) {
      console.error("There was an error updating the course:", error);
      alert("An error occurred while updating the course. Please try again.");
    }
    }
  },
  mounted() {
    this.editData.deptText = this.$route.query.deptText || '';
  this.editData.courseNumText = this.$route.query.courseNumText || '';
  this.editData.levelText = this.$route.query.levelText || '';
  this.editData.hoursText = this.$route.query.hoursText || '';
  this.editData.nameText = this.$route.query.nameText || '';
  this.editData.descText = this.$route.query.descText || '';
  }
};
</script>