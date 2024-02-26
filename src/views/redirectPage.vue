<template>
  <div>라우트 에러 방지용 더미 페이지</div>
</template>

<script setup>
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { storeToRefs } from 'pinia'
import { useContactStore } from '@/stores/contact'

const cStore = useContactStore()
console.log(cStore)
const store = useIsLoggedInStore()
const { logCompany, logObj } = storeToRefs(store)
console.log(logCompany, logObj)
</script>
