<template>
  <v-card>
    <boardTitle :props="board"></boardTitle>
    <boardContent :props="board"></boardContent>
    <boardFile :props="board"></boardFile>
  </v-card>
</template>

<script setup>
import boardTitle from './boardTitle.vue'
import boardContent from './boardContent.vue'
import boardFile from './boardFile.vue'
import { useRouter } from 'vue-router'
import { useAdminBoardStore } from '@/stores/adminBoard'

const aStore = useAdminBoardStore()

const router = useRouter()
const idx = router.currentRoute.value.params.idx
const board = aStore.getBoard(parseInt(idx))
console.log(idx, board)
</script>
