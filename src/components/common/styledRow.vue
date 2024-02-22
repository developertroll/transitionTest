<template>
  <v-col
    cols="2"
    class="bg-indigo-lighten-4 font-bold rounded-md border text-center text-h6 pa-md-8"
    v-if="title.length > 0"
  >
    {{ title }}
  </v-col>
  <v-col cols="10" class="bg-indigo-lighten-5 rounded-md border pl-3 py-2">
    <slot :value="value"></slot>
  </v-col>
</template>

<script setup>
defineProps({
  title: String,
  value: String
})
</script>
