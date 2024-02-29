<template>
  <v-container class="w-50">
    <v-row>
      <v-col cols="12" class="text-center text-md-h6">
        <p><v-icon icon="fas fa-triangle-exclamation"></v-icon>정말로 삭제하시겠습니까?</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="text-center">
        <v-btn @click="deleteBoard()" color="error">삭제</v-btn>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-btn @click="cancelDelete" color="primary">취소</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAdminBoardStore } from '@/stores/adminBoard'
import { useRouter } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'
import { useToast } from '@/composables/toastC'
const props = defineProps({
  props: Object
})

const aStore = useAdminBoardStore()
const router = useRouter()
const dStore = useDialogStore()
const toast = useToast()

function deleteBoard() {
  aStore.deleteBoard(props.props.idx)
  toast.sendToast('success', 'boardDelete')
  dStore.closeDialog()
  router.push('/data')
}

function cancelDelete() {
  toast.sendToast('info', 'cancel')
  dStore.closeDialog()
}
</script>
