<template>
  <v-chip>
    {{ props.tag.name }}
  </v-chip>
</template>

<script setup>
const props = defineProps({
  tag: Object
})
</script>
