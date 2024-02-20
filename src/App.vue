<script setup>
import { RouterView } from 'vue-router'
import { VSonner } from 'vuetify-sonner'

import 'vuetify-sonner/style.css'
</script>

<template>
  <VSonner position="top-center" duration="2500" />
  <RouterView />
</template>

<style scoped></style>
