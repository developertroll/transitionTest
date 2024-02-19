<template>
  <v-row>
    <v-col v-for="tag in props.tags" :key="tag" cols="12">
      <boardTag :tag="tag"></boardTag>
    </v-col>
  </v-row>
</template>

<script setup>
import boardTag from './boardTag.vue'

const props = defineProps({
  tags: Array
})
</script>
