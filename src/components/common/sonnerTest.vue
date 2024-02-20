<template>
  <div class="text-center ma-3">
    <v-btn @click="showToast" color="primary">확인</v-btn>
  </div>
</template>

<script setup>
import { toast } from 'vuetify-sonner'

const alert = defineProps({
  type: String,
  messageType: String,
  trigger: { type: Boolean, default: false }
})
const type = alert.type
const messageType = alert.messageType
const initAlert = {
  error: {
    login: '아이디 또는 비밀번호가 일치하지 않습니다',
    database: '데이터베이스 오류가 발생했습니다',
    server: '서버 오류가 발생했습니다',
    board: '필수 입력값을 입력해주세요'
  },
  success: {
    login: '로그인에 성공했습니다',
    board: '문의가 등록되었습니다.'
  }
}

const showToast = () => {
  toast(alertMessage, {
    cardProps: {
      color: type,
      class: 'elevation-10'
    },
    prependIcon: `$${type}`
  })
}

let alertMessage = initAlert[type][messageType]
if (!alertMessage) {
  alertMessage = '알수없는 오류가 발생했습니다'
}
</script>
