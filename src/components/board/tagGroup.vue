<template>
  <v-chip-group multiple v-bind:model-value="sTag" disabled class="h-auto ma-auto pl-2">
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
// tags의 길이만큼 0,1,2...로 구성되는 Array 생성
let sTag = Array.from({ length: props.tags.length }, (v, i) => i)
</script>
