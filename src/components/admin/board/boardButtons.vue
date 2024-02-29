<template>
  <v-divider></v-divider>
  <div class="justify-end align-end d-flex ma-auto pa-md-1">
    <v-btn @click="goWrite" v-if="status.write" color="primary">글쓰기</v-btn>
    <v-btn @click="goList" v-if="status.list" color="primary">목록</v-btn>
    <v-btn @click="goUpdate" v-if="status.owner" color="primary">수정</v-btn>
    <v-btn @click="goDelete" v-if="status.owner" color="error">삭제</v-btn>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'
import { useAdminBoardStore } from '@/stores/adminBoard'
defineProps({
  status: Object
})

const router = useRouter()
function goWrite() {
  router.push(`/data/write`)
}
function goList() {
  router.push(`/data`)
}
function goUpdate() {
  router.push(`/data/edit/${router.currentRoute.value.params.idx}`)
}
function goDelete() {
  const dStore = useDialogStore()
  const aStore = useAdminBoardStore()
  dStore.openDialog(
    'deleteConfirm',
    '삭제 확인',
    aStore.getBoard(parseInt(router.currentRoute.value.params.idx))
  )
}
</script>
