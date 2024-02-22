<template>
  <v-container>
    <v-card>
      <div class="d-flex justify-space-between align-baseline">
        <v-card-title>{{ logObj.name }} 님의 개인 정보</v-card-title>
        <v-btn variant="elevated" color="primary" @click="requestEdit">수정 요청</v-btn>
      </div>

      <v-row no-gutters>
        <template v-for="(value, key) in userObj" :key="key">
          <profileRow :title="idTranslate[key]" :value="value"></profileRow>
          <v-divider></v-divider>
        </template>
      </v-row>
      <div class="d-flex justify-space-between align-baseline">
        <v-card-title>{{ logObj.name }}님의 회사 정보</v-card-title>
        <div>
          <v-alert type="info" variant="outlined" density="compact">
            회사 정보 수정은 문의를 통해 가능합니다.
          </v-alert>
        </div>
      </div>
      <v-row no-gutters>
        <template v-for="(value, key) in userCompany" :key="key">
          <profileRow :title="companyTranslate[key]" :value="value"></profileRow>
          <v-divider></v-divider>
        </template>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import profileRow from './profileRow.vue'
import { useToast } from '@/composables/toastC'

const toast = useToast()
const store = useIsLoggedInStore()
const router = useRouter()
const { logCompany, logObj, idTranslate, companyTranslate } = storeToRefs(store)
let userObj = JSON.parse(JSON.stringify(logObj.value))
let userCompany = JSON.parse(JSON.stringify(logCompany.value))
if (store.userType === 'customer') {
  delete userObj.idx
  delete userCompany.idx
  delete userCompany.workerIdx
}

function requestEdit() {
  toast.sendToast('info', 'requestEdit')
  router.push(`/request/edit/${store.userType}/${logObj.value.idx}`)
}
</script>
