<template>
  <v-card>
    <v-list :lines="props.type === '접수' ? 'one' : 'two'">
      <v-list-subheader :title="subTitle"></v-list-subheader>
      <template v-for="item in contactList" :key="item.idx">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar color="grey-darken-1"></v-avatar>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle v-if="props.type !== '접수'">{{
            item.content
          }}</v-list-item-subtitle>
          <v-divider></v-divider>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { storeToRefs } from 'pinia'
const props = defineProps({
  type: String
})
const store = useContactStore()

const store1 = useIsLoggedInStore()
const { customerGetContact } = storeToRefs(store)
const { logWho, logObj } = storeToRefs(store1)
const contactList =
  props.type === '접수'
    ? customerGetContact?.value(logObj.value.idx).filter((contact) => contact.answer === '')
    : store.customerGetFinishedContact(logObj.value.idx)
if (contactList.length === 0) {
  contactList.push({ idx: 0, title: '메세지가 없어요!', content: '메세지를 남겨주세요!' })
}
const subTitle = props.type === '접수' ? '답변 대기중' : '답변 완료'
// props.type을 통해서 답변 대기중, 답변 완료를 구별하여 렌더링
</script>
