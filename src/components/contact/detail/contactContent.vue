<template>
  <v-card class="h-150">
    <v-card-title> 문의 내용 </v-card-title>
    <v-card-text>
      {{ props.content }}
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  props: Object
})
</script>
