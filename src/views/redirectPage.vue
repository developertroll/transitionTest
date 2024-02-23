<template>
  <div>
    <detailContact :props="customerGetContact(0)[0]" />
  </div>
</template>

<script setup>
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { storeToRefs } from 'pinia'
import { useContactStore } from '@/stores/contact'
import detailContact from '@/components/contact/detailContact.vue'

const cStore = useContactStore()
const { customerGetContact } = cStore
const store = useIsLoggedInStore()
const { logCompany, logObj } = storeToRefs(store)
console.log(logCompany, logObj)
</script>
