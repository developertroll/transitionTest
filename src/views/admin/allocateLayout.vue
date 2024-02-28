<template>
  <v-card>
    <v-tabs v-model="currentTab" background-color="primary">
      <v-tab v-for="tab in tabs" :key="tab.id">
        {{ tab.name }}
      </v-tab>
    </v-tabs>

    <v-card-text>
      <allocateContact v-if="currentTab === 0" type="allocateContact"></allocateContact>
      <!-- tab2는 등록 -->
      <allocateContact v-if="currentTab === 1" type="changeAllocate"></allocateContact>
    </v-card-text>
  </v-card>
</template>

<script setup>
import allocateContact from './allocateContact.vue'
import { ref } from 'vue'

const currentTab = ref(0)
const tabs = ref([
  { id: 0, name: '담당자 지정' },
  { id: 1, name: '담당자 변경' }
])
</script>
