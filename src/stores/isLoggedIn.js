import { defineStore } from 'pinia'
import { login } from '../composables/login'
import { company } from '../composables/company'

export const useIsLoggedInStore = defineStore('isLoggedIn', {
  state: () => ({
    isLoggedIn: false,
    currentLogin: '',
    userType: ''
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
    },
    setUserType(value) {
      this.userType = value
    }
  },
  getters: {
    logChk: (state) => state.isLoggedIn,
    logWho: (state) => state.currentLogin,
    uTypeChk: (state) => state.userType,
    logName: (state) => {
      return login().findUser(state.currentLogin, state.userType).name
    },
    logCompany: (state) => {
      return company().findCompanyByWorker(login().findUser(state.currentLogin, state.userType).idx)
    }
  },
  persist: true
})
