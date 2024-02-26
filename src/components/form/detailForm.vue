<template>
  <v-card>
    <v-card-title>
      <h2>상세 사항</h2>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="form.location" label="요청사항/문제 지역"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="form.time" label="문제 발생 시각"></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="form.etc" label="기타(문제 내용, 특이사항 등등...)"></v-textarea>
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
  location: '',
  time: '',
  etc: ''
})

const submitForm = () => {
  console.log(form.value)
  emit('submit', form.value)
}
</script>
