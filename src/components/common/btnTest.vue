<script setup>
import { ref } from 'vue'
let tests = ref(false)

function disableButton() {
  tests.value = !tests.value
}
</script>

<template>
  <v-btn color="primary" :disabled="tests" @click="disableButton">Test</v-btn>
</template>
