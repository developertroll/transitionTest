<template>
  <v-card>
    <v-card-title>관리자 메모</v-card-title>
    <v-card-text>
      <v-textarea label="관리자 메모" outlined rows="5" v-model="adminDescription"></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  descProp: String
})
import { ref } from 'vue'

let adminDescription = ref(props.descProp)
</script>
