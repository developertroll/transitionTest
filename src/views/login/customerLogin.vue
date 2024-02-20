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
              <v-btn type="submit" color="primary" :disabled="btnD">로그인</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/composables/login'
import { useRouter } from 'vue-router'
import { useToast } from '@/composables/toastC'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'

const toast = useToast()
let btnD = ref(false)
const route = useRouter()
const isLoggedIn = useIsLoggedInStore()

const logChk = login()

const logins = () => {
  const result = logChk.customerLogin(id.value, password.value)
  if (!result) {
    toast.sendToast('error', 'login')
    btnD.value = true
    setTimeout(() => {
      btnD.value = false
    }, 3000)
  } else {
    toast.sendToast('success', 'login')
    isLoggedIn.setCurrentLogin(id.value)
    isLoggedIn.login(true)
    route.push('/')
  }
}
const id = ref('')
const password = ref('')
</script>
