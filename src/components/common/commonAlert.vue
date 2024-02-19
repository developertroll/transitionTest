<template>
  <div class="ma-3">
    <v-snackbar top :timeout="10000" :v-model="trigger" eager :color="type">
      <v-alert :type="type" :text="alertMessage"></v-alert>
      경고!
    </v-snackbar>
  </div>
</template>

<script setup>
const alert = defineProps({
  type: String,
  messageType: String,
  trigger: { type: Boolean, default: true }
})
console.log(alert)
const type = alert.type // Fix typo: change 'tyle' to 'type'
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

let alertMessage = initAlert[type][messageType]
if (!alertMessage) {
  alertMessage = '알수없는 오류가 발생했습니다'
}
</script>
