<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="display-1 text-center">고객 로그인</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-form @submit.prevent="logins">
              <v-text-field v-model="id" label="아이디" required></v-text-field>
              <v-text-field
                v-model="password"
                label="비밀번호"
                required
                type="password"
              ></v-text-field>
              <v-btn type="submit" color="primary">로그인</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <commonAlert type="error" messageType="login" :trigger="true" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/composables/login'
import commonAlert from '@/components/common/commonAlert.vue'

const logChk = login()
console.log(logChk)
const logins = () => {
  const result = logChk.customerLogin(id.value, password.value)
  if (!result) {
    alert('아이디, 비밀번호를 다시 확인해주세요')
  }
}
const id = ref('')
const password = ref('')
</script>
