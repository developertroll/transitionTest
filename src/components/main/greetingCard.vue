<template>
  <v-card>
    <div class="d-flex flex-no-wrap">
      <v-img :src="alogo2" :max-width="200" :max-height="200"></v-img>
      <div>
        <v-card-title class="text-h5">ALOGO 고객문의 페이지에 오신 것을 환영합니다!</v-card-title>
        <v-card-text>
          {{ store.logName }}님의 문의에 대한 답변과 해결을 위해 최선을 다하겠습니다.
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import alogo2 from '@/assets/alogo-2.svg'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'

const store = useIsLoggedInStore()
</script>
