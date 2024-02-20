<template>
  <v-btn color="primary" @click="logout">Logout</v-btn>
</template>

<script setup>
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useIsLoggedInStore()
function logout() {
  store.logout()
  router.push('/login')
}
</script>
