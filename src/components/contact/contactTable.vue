<template>
  <v-data-table :items="contacts" :headers="headers">
    <template v-slot:item="{ item }">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <tr
            @click="test(item)"
            v-bind="props"
            :class="isHovering ? 'cursor-pointer bg-grey-lighten-2' : ''"
          >
            <td>{{ item.idx }}</td>
            <td>{{ item.title }}</td>
            <td><tagGroupVue :tags="item.tag"></tagGroupVue></td>
            <td>{{ moment(item.date).format('YYYY-MM-DD') }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </template>
      </v-hover>
    </template>
  </v-data-table>
</template>
import { dialogFunction } from '@/composables/dialogFunction';

<script setup>
import { useContactStore } from '@/stores/contact'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import moment from 'moment'
import tagGroupVue from '../board/tagGroup.vue'
import { dialogFunction } from '@/composables/dialogFunction'

const dialog = dialogFunction()
const cStore = useContactStore()
const iStore = useIsLoggedInStore()
const { customerGetContact } = cStore
const { logObj } = iStore
const contacts = customerGetContact(logObj.idx)

const headers = [
  { title: '문의 번호', key: 'idx' },
  { title: '문의 제목', key: 'title' },
  { title: '태그', key: 'tag' },
  { title: '문의 일자', key: 'date' },
  { title: '문의 상태', key: 'status' }
]

function test(item) {
  dialog.openDialog('detailContact', item.title, { props: item })
}
</script>

<style scoped></style>
