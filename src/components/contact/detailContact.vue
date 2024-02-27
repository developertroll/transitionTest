<script setup>
import contactTitle from './detail/contactTitle.vue'
import contactContent from './detail/contactContent.vue'

defineOptions({
  name: 'detailContact'
})
defineProps({
  props: Object
})
</script>

<template>
  <v-card>
    <v-card-text>
      <contactTitle :props="props"></contactTitle>
      <contactContent :props="props"></contactContent>
    </v-card-text>
  </v-card>
</template>
