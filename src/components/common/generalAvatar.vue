<template>
  <v-avatar v-if="img.img !== ''" class="mb-4" size="64" :color="color">
    <v-img :src="img"></v-img>
  </v-avatar>
  <v-avatar v-else class="mb-4" size="64" :color="color">
    <v-icon>fas fa-user-large</v-icon>
  </v-avatar>
</template>

<script setup>
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
const img = defineProps({
  img: { type: String, default: '' }
})

const store = useIsLoggedInStore()
const color = store.userType === 'admin' ? 'blue' : 'light-green'
</script>
