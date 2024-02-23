<template>
  <v-card>
    <v-tabs v-model="currentTab" background-color="primary">
      <v-tab v-for="tab in tabs" :key="tab.id">
        {{ tab.name }}
      </v-tab>
    </v-tabs>

    <v-card-text>
      <contactMain v-if="currentTab === 0"></contactMain>
      <!-- tab2는 등록 -->
      <redirectPageVue v-if="currentTab === 1"></redirectPageVue>
    </v-card-text>
    {{ currentTab }}
  </v-card>
</template>

<script setup>
import redirectPageVue from '../redirectPage.vue'
import { ref } from 'vue'
import contactMain from './contactMain.vue'
const tabs = ref([
  { id: 0, name: '문의 내역' },
  { id: 1, name: '문의 등록' }
])
const currentTab = ref(1)
</script>
