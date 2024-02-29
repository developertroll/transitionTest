<template>
  <v-data-table :items="data" :headers="headers" hover>
    <template v-slot:item="{ item }">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <tr
            @click.stop="clickRow(item)"
            v-bind="props"
            :class="isHovering ? 'cursor-pointer bg-yellow-lighten-3' : ''"
          >
            <td>{{ item.idx }}</td>
            <td>{{ item.name ? item.name : item.companyName }}</td>
            <td
              v-if="item.name && alarmingList.includes(item.idx) && type === 0"
              class="bg-red-lighten-4 align-baseline"
            >
              <v-btn
                disabled
                color="warning"
                size="small"
                prepend-icon="fas fa-triangle-exclamation"
              >
                사용자가 수정을 요청했습니다
              </v-btn>
            </td>
            <td v-else></td>
          </tr>
        </template>
      </v-hover>
    </template>
  </v-data-table>
</template>

<script setup>
import { login } from '@/composables/login'
import { company } from '@/composables/company'
import { useContactStore } from '@/stores/contact'
import { useDialogStore } from '@/stores/dialog'
import { ref, watchEffect } from 'vue'

const dStore = useDialogStore()
const cStore = useContactStore()
const prop = defineProps({
  type: Number
})

let data = ref([])
const components = ref('')
watchEffect(() => {
  switch (prop.type) {
    case 0:
      data.value = login().customer
      break
    case 1:
      data.value = company().companyList
      break
    case 2:
      data.value = login().admin
      break
    default:
      data.value = login().customer
      break
  }
})

function clickRow(row) {
  components.value = 'adminInfoChange'
  console.log(components.value)
  dStore.openDialog(components.value, '정보', row)
}

const headers = [
  { title: '번호', key: 'idx', width: '10%' },
  { title: '이름', key: 'name' },
  { title: '특이사항' }
]

const alarmingList = (() => {
  const alarm = cStore.getInfoContact()
  return alarm.map((contact) => {
    return contact.writer
  })
})()
// function openDetail() {
//   components.value = 'detailContact'
//   console.log(components.value)
//   dStore.openDialog(components.value, '문의', cStore.findFirstCotactByUser(alarmingList[0]))
// }
</script>
