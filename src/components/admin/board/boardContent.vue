<template>
  <v-card>
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
