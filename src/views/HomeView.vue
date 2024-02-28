<template>
  <v-row v-if="type === 'customer'">
    <v-col cols="12">
      <greetingCard />
    </v-col>
    <v-col cols="12">
      <contactGraph />
    </v-col>
    <v-col cols="12">
      <contactList type="접수" />
    </v-col>
    <v-col cols="12">
      <contactList type="답변" />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
      <greetingCard />
    </v-col>
  </v-row>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import greetingCard from '@/components/main/greetingCard.vue'
import contactGraph from '@/components/main/contactGraph.vue'
import contactList from '@/components/main/contactList.vue'

const store = useContactStore()
const store1 = useIsLoggedInStore()
const type = store1.userType
const cards =
  type === 'customer'
    ? store.customerGetContact(store1.logWho)
    : store.adminGetContact(store1.logWho) || ['Today', 'Yesterday']
// const placeholder = ['Today', 'Yesterday']
</script>
