<template>
  <div></div>
</template>

<script setup>
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { storeToRefs } from 'pinia'

const store = useIsLoggedInStore()
const { logCompany, logObj } = storeToRefs(store)
console.log(logCompany, logObj)
</script>
