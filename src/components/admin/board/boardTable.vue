<template>
  <v-data-table :items="data" :headers="headers" v-bind:sort-by="sortBy">
    <template v-slot:item="{ item }">
      <tr @click="clickRow(item)">
        <td>{{ item.idx }}</td>
        <td>{{ item.title }}</td>
        <td>{{ login().findUserByIdx(item.writer).name }}</td>
        <td>{{ moment(item.createAt).format('YYYY-MM-DD') }}</td>
        <td>{{ item.views }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup>
import { useAdminBoardStore } from '@/stores/adminBoard'
import { useRouter } from 'vue-router'
import { login } from '@/composables/login'
import moment from 'moment'

const router = useRouter()
const store = useAdminBoardStore()
const data = store.adminBoardState
const headers = [
  {
    title: '번호',
    key: 'idx'
  },
  {
    title: '제목',
    key: 'title'
  },
  {
    title: '작성자',
    key: 'writer'
  },
  {
    title: '작성일',
    key: 'createdAt'
  },
  {
    title: '조회수',
    key: 'views'
  }
]

const sortBy = [{ key: 'idx', order: 'desc' }]

function clickRow(row) {
  store.addView(row.idx)
  router.push(`/data/view/${row.idx}`)
}
</script>
