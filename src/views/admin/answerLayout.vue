<template>
  <v-card>
    <v-card-title>문의사항</v-card-title>
    <v-card-text>
      <detailContact :props="contact"></detailContact>
    </v-card-text>
    <v-card-text>
      <answerContact :idx="contactIdx" @pushAnswer="submitAnswer"></answerContact>
    </v-card-text>
  </v-card>
</template>

<script setup>
import answerContact from './answerContact.vue'
import detailContact from '@/components/contact/detailContact.vue'

import { useRouter } from 'vue-router'
import { useContactStore } from '@/stores/contact'
import { useToast } from '@/composables/toastC'

const toast = useToast()

const cStore = useContactStore()
const { getContactByIdx } = cStore
const route = useRouter()
const contactIdx = parseInt(route.currentRoute.value.params.idx)
console.log(contactIdx, typeof contactIdx)
const contact = getContactByIdx(contactIdx)
console.log(contact)

function submitAnswer(form) {
  cStore.answerContact(contactIdx, form.answer, form.adminTag, form.adminDescription)
  toast.sendToast('success', 'answer')
  route.push('/answer')
}
</script>
