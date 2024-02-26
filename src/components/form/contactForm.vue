<template>
  <v-card>
    <v-card-title>
      <h2>문의 개요</h2>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="form.title" label="제목" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="form.content" label="개요" required></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn type="submit" color="primary">제출</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['submit'])

const form = ref({
  title: '',
  content: ''
})

const submitForm = () => {
  console.log(form.value)
  emit('submit', form.value)
}
</script>
