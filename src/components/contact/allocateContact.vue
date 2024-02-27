<script setup>
import contactTitle from './detail/contactTitle.vue'
import contactContent from './detail/contactContent.vue'
import allocateSelect from '../admin/allocateSelect.vue'
import { useToast } from '@/composables/toastC'
import { useContactStore } from '@/stores/contact'
import { useDialogStore } from '@/stores/dialog'
import { ref } from 'vue'

const dStore = useDialogStore()
const { dialogState } = dStore
const cStore = useContactStore()
const toast = useToast()
defineOptions({
  name: 'detailContact'
})
const props = defineProps({
  props: Object
})
const admin = ref(null)
function setAllocate(newVal) {
  admin.value = newVal
}
function setContact() {
  toast.sendToast('success', 'allocate')
  cStore.allocateAdminToContact(props.props.idx, admin.value)
  if (dialogState) {
    dStore.closeDialog()
  }
}
</script>

<template>
  <v-card>
    <v-card-text>
      <contactTitle :props="props.props"></contactTitle>
      <contactContent :props="props.props"></contactContent>
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title>담당 관리자 지정</v-card-title>
    <v-card-text>
      <allocateSelect @selectAdmin="setAllocate"></allocateSelect>
      <v-btn @click="setContact">선택</v-btn>
    </v-card-text>
  </v-card>
</template>
