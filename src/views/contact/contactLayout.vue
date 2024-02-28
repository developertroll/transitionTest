<template>
  <v-card>
    <v-tabs v-model="currentTab" background-color="primary">
      <v-tab v-for="tab in tabs" :key="tab.id">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-card-title v-if="uTypeChk === 'admin'">
      <v-alert type="info" variant="outlined">
        재문의에 관한 답변은 이곳에서 작성할 수 있습니다. 일반 문의에 대한 답변은 답변 작성
        페이지에서 작성할 수 있습니다.
      </v-alert>
    </v-card-title>
    <v-card-text>
      <contactMain v-if="currentTab === 0"></contactMain>
      <!-- tab2는 등록 -->
      <contactCreate v-if="currentTab === 1"></contactCreate>
      <!-- 답변 대기 상태의 문의들 확인하고 완료/추가문의 선택하는 곳 -->
      <awaitingContact v-if="currentTab === 2"></awaitingContact>
    </v-card-text>
  </v-card>
</template>

<script setup>
import contactCreate from './contactCreate.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import contactMain from './contactMain.vue'
import awaitingContact from './awaitingContact.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'

const isLoggedIn = useIsLoggedInStore()
const { uTypeChk } = isLoggedIn

const tabs =
  uTypeChk === 'customer'
    ? ref([
        { id: 0, name: '문의 내역' },
        { id: 1, name: '문의 등록' },
        { id: 2, name: '답변 확인' }
      ])
    : ref([{ id: 0, name: '접수 내역' }])

const currentTab = ref(0)
// currentTab.value이 1일때 다른 라우팅이나 이동할때 경고 띄우기(아래 코드는 새로고침 등의 물리적인 이동에 뜸)
onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload)
})

function handleBeforeUnload(event) {
  if (currentTab.value === 1) {
    event.preventDefault()
    event.returnValue = ''
  }
}

onBeforeRouteLeave((to, from, next) => {
  if (currentTab.value === 1 && !confirm('작성중인 내용이 있습니다. 정말로 이동하시겠습니까?')) {
    next(false)
  } else {
    next()
  }
})
</script>
