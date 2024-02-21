<template>
  <v-card>
    <v-card-title class="text-h6">
      {{ store1.logName }}님의 문의와 답변 현황은 다음과 같습니다.
    </v-card-title>
    <v-card-text>
      <!-- 총 문의 개수, 답변된 문의 개수, 답변을 기다리는 문의 개수가 각 줄에 나오고, 숫자 부분을 글자 색 다르게 표현 -->
      <v-row>
        <v-col cols="12" sm="4">
          <v-card>
            <v-card-title class="text-h6">총 문의 개수</v-card-title>
            <v-card-text class="text-h7">{{
              store.customerGetContact(store1.logWho).length
            }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card>
            <v-card-title class="text-h6">답변된 문의 개수</v-card-title>
            <v-card-text class="text-h7">{{
              store.customerGetContact(store1.logWho).filter((contact) => contact.answer !== '')
                .length
            }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card>
            <v-card-title class="text-h6">답변을 기다리는 문의 개수</v-card-title>
            <v-card-text class="text-h7">{{
              store.customerGetContact(store1.logWho).filter((contact) => contact.answer === '')
                .length
            }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'

const store = useContactStore()
const store1 = useIsLoggedInStore()
</script>
