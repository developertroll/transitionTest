<template>
  <v-chip-group>
    <template v-for="tag in props.tags" :key="tag">
      <boardTag :tag="tag"></boardTag>
    </template>
  </v-chip-group>
</template>

<script setup>
import boardTag from './boardTag.vue'

const props = defineProps({
  tags: Array
})
</script>
