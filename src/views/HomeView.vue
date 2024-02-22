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
    <!-- <v-col v-for="card in placeholder" :key="card" cols="12">
      <v-card>
        <v-list lines="two">
          <v-list-subheader :title="card"></v-list-subheader>

          <template v-for="n in 6" :key="n">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar color="grey-darken-1"></v-avatar>
              </template>

              <v-list-item-title>{{ `Message ${n}` }}</v-list-item-title>

              <v-list-item-subtitle title="randomMessage">randomMessage</v-list-item-subtitle>
            </v-list-item>

            <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <h2 class="text-h5">No Messages</h2>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row> -->
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
console.log(cards)
</script>
