<template>
  <v-select
    chips
    label="선택"
    :items="props.items"
    :multiple="props.type"
    item-title="title"
    item-value="value"
    v-model="value"
  >
  </v-select>
  {{ value }}
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const props = defineProps({
  items: Array,
  type: Boolean,
  value: Array
})
const value = ref(props.value)
const emit = defineEmits(['change'])
watchEffect(() => {
  emit('change', value.value)
  console.log(value.value)
})
</script>
