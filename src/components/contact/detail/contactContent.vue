<template>
  <v-card>
    <v-card-title> 문의 내용 </v-card-title>
    <v-card-text>
      <p v-html="formattedContent"></p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  props: Object
})

const formattedContent = computed(() => {
  if (props.props.content) {
    return props.props.content.replace(/\n/g, '<br>')
  }
  return ''
})
</script>
