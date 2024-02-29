<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <router-view></router-view>
    <boardButtons :status="status"></boardButtons>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'
import boardButtons from '@/components/admin/board/boardButtons.vue'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { useAdminBoardStore } from '@/stores/adminBoard'

const router = useRouter()
const iStore = useIsLoggedInStore()
const aStore = useAdminBoardStore()
const status = {
  write:
    router.currentRoute.value.name !== 'boardWrite' &&
    router.currentRoute.value.name !== 'boardUpdate',
  list: router.currentRoute.value.name !== 'boardTable',
  owner: router.currentRoute.value.name === 'boardView' && ownerChk()
}
let title
switch (router.currentRoute.value.name) {
  case 'boardWrite':
    title = '글쓰기'
    break
  case 'boardTable':
    title = '목록'
    break
  case 'boardView':
    title = '글보기'
    break
  case 'boardUpdate':
    title = '글 수정'
    break
}

function ownerChk() {
  if (router.currentRoute.value.params.idx === undefined) return false
  const idx = router.currentRoute.value.params.idx
  const board = aStore.getBoard(parseInt(idx))
  return iStore.logObj.idx === board.writer
}
</script>
