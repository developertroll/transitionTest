<template>
  <v-app id="inspire">
    <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>fas fa-square</v-icon>

      <v-icon>fas fa-circle</v-icon>

      <v-icon>fas fa-play</v-icon>
      <v-btn icon @click="logOut" size="x-small">
        <v-icon>fas fa-arrow-right-from-bracket</v-icon>
      </v-btn>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey-lighten-4" class="pa-4">
        <generalAvatar></generalAvatar>
        <div v-if="isLoggedIn.userType === 'customer'">{{ logCompany.companyName }}</div>
        <div>{{ user.name }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="menu in menuItems"
          :key="menu.title"
          :prepend-icon="menu.icon"
          :title="menu.title"
          :to="menu.to"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <div :key="$route.name">
              <component :is="Component" :key="$route.path" />
            </div>
          </transition>
        </router-view>
      </v-container>
      <dialogContainer :signal="dialogState" :props="dialogProps" :title="dialogTitle">
        <template v-slot:text>
          <component :is="dialogPropComponent" :props="dialogProps"></component>
        </template>
      </dialogContainer>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useMenu } from '../composables/menu'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { login } from '@/composables/login'
import generalAvatar from '@/components/common/generalAvatar.vue'
import { storeToRefs } from 'pinia'
import { useDialogStore } from '@/stores/dialog'
import dialogContainer from '@/components/dialog/dialogContainer.vue'
import { defineAsyncComponent, computed } from 'vue'
const router = useRouter()
const dialogStore = useDialogStore()
const { dialogState, dialogComponent, dialogTitle, dialogProps } = storeToRefs(dialogStore)
const dialogPropComponent = computed(() => {
  return defineAsyncComponent(() => import(`@/components/contact/${dialogComponent.value}.vue`))
})
const loginChk = login()
const links = useMenu()
const isLoggedIn = useIsLoggedInStore()
const { logCompany } = storeToRefs(isLoggedIn)
const menuItems = links.filterMenuItems(isLoggedIn.userType)
const user = loginChk.findUser(isLoggedIn.currentLogin, isLoggedIn.userType)

function logOut() {
  isLoggedIn.logout()
  alert('로그아웃 했습니다')

  router.replace('/login')
}
const drawer = ref(null)
</script>
