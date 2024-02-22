<template>
  <v-col cols="2" class="bg-indigo-lighten-4 font-bold rounded-md border text-center py-2">
    {{ title }}
  </v-col>
  <v-col cols="10" class="bg-indigo-lighten-5 rounded-md border pl-3 py-2">
    {{ value }}
  </v-col>
</template>

<script setup>
defineProps({
  title: String,
  value: String
})
</script>
