<template>
  <v-chip color="primary" variant="elevated">
    {{ props.tag }}
  </v-chip>
</template>

<script setup>
const props = defineProps({
  tag: String
})
</script>
