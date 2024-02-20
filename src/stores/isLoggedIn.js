import { defineStore } from 'pinia'

export const useIsLoggedInStore = defineStore('isLoggedIn', {
  state: () => ({
    isLoggedIn: false,
    currentLogin: ''
  }),

  actions: {
    login(value) {
      this.isLoggedIn = value
    },
    setCurrentLogin(value) {
      this.currentLogin = value
    },
    logout() {
      this.isLoggedIn = false
      this.currentLogin = ''
    }
  },
  getters: {
    logChk: (state) => state.isLoggedIn,
    logWho: (state) => state.currentLogin
  },
  persist: true
})
