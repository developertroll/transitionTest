import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIsLoggedInStore = defineStore('isLoggedIn', () => {
  const isLoggedIn = ref(false)
  const currentLogin = ref('')
  const login = (value) => {
    isLoggedIn.value = value
  }
  const setCurrentLogin = (value) => {
    currentLogin.value = value
  }

  return { isLoggedIn, login, currentLogin, setCurrentLogin }
})
