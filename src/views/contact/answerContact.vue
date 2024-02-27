<template>
  <v-card>
    <v-card-title>답변 작성</v-card-title>
    <v-card-text>
      <answerForm :contactIdx="4"></answerForm>
    </v-card-text>
  </v-card>
</template>

<script setup>
import answerForm from '@/components/contact/answer/answerForm.vue'
</script>
