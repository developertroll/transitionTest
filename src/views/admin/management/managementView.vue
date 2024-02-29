<template>
  <v-card>
    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab.id" @click="changeTab(tab.id)">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-card-text>
      <userTable :type="currentTab"></userTable>
    </v-card-text>
  </v-card>
</template>

<script setup>
// 이 페이지는 사용자 관리 페이지 레이아웃입니다
import userTable from '@/components/admin/userTable.vue'
import { ref } from 'vue'

const tabs = ref([
  { id: 0, name: '고객 목록' },
  { id: 1, name: '고객사 목록' },
  { id: 2, name: '관리자 목록' }
])
const currentTab = ref(0)
const changeTab = (tabId) => {
  currentTab.value = tabId
}
</script>
