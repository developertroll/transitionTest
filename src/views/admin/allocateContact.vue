<template>
  <contactTable :spec="type"></contactTable>
</template>

<script setup>
import contactTable from '@/components/contact/contactTable.vue'

defineProps({
  type: String
})
</script>
