<template>
  <v-row>
    <template v-for="(value, key) in props">
      <nonSlotRow :title="key" :value="value"></nonSlotRow>
    </template>
  </v-row>
</template>

<script setup>
import nonSlotRow from '../common/nonSlotRow.vue'
const props = defineProps({
  props: Object
})
</script>
