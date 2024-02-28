<template>
  <v-card>
    <v-card-title>답변 작성</v-card-title>
    <v-card-text>
      <answerForm :contactIdx="idx" @pushAnswer="pushAnswer"></answerForm>
    </v-card-text>
  </v-card>
</template>

<script setup>
import answerForm from '@/components/contact/answer/answerForm.vue'
defineProps({
  idx: Number
})
const emit = defineEmits(['pushAnswer'])
function pushAnswer(form) {
  emit('pushAnswer', form)
}
</script>
