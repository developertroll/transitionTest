<template>
  <v-data-table :items="data" :headers="headers">
    <template v-slot:item="{ item }">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <tr
            @click="clickRow(item)"
            v-bind="props"
            :class="alarmingList.includes(item.idx) ? 'cursor-pointer bg-grey-lighten-2' : ''"
          >
            <td>{{ item.idx }}</td>
            <td>{{ item.name }}</td>
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

const cStore = useContactStore()
const prop = defineProps({
    type: Number
})

const data = switch(prop.type){
    case 0:
        return login().customer;
    case 1:
        return company().companyList;
    case 2:
        return login().admin;
    default:
        return login().customer;
}

function clickRow(row){
    console.log(row);
    // 이 row를 클릭하면 해당 row의 정보를 보여주고 수정할 수 있는 페이지로 이동 예정
}

const headers = [
    { text: '번호', value: 'idx' },
    { text: '이름', value: 'name' }
]

const alarmingList = () => {
    const alarm = cStore.getInfoContact();
    return alarm.map((contact) => {
        return contact.writer
    })
}
</script>
