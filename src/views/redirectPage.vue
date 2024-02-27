<template>
  <div>라우트 에러 방지용 더미 페이지</div>
  <div>
    <answerForm :contactIdx="4"></answerForm>
  </div>
</template>

<script setup>
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { storeToRefs } from 'pinia'
import { useContactStore } from '@/stores/contact'
import answerForm from '@/components/contact/answer/answerForm.vue'
const cStore = useContactStore()
console.log(cStore)
const store = useIsLoggedInStore()
const { logCompany, logObj } = storeToRefs(store)
console.log(logCompany, logObj)
</script>
