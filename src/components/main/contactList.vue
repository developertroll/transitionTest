<template>
  <v-card>
    <v-list :lines="props.type === 'awaiting' ? 'one' : 'two'">
      <v-list-subheader :title="subTitle"></v-list-subheader>
      <template v-for="item in contactList" :key="item.idx">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar color="grey-darken-1"></v-avatar>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle v-if="props.type !== 'awaiting'">{{
            item.content
          }}</v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
const props = defineProps({
  type: String
})
const store = useContactStore()
const store1 = useIsLoggedInStore()

const contactList =
  props.type === 'awaiting'
    ? store.customerGetContact(store1.logWho).filter((contact) => contact.answer === '')
    : store.customerGetContact(store1.logWho).filter((contact) => contact.answer !== '')
if (contactList.length === 0) {
  contactList.push({ idx: 0, title: '메세지가 없어요!', content: '메세지를 남겨주세요!' })
}
const subTitle = props.type === 'awaiting' ? '답변 대기중' : '답변 완료'
// props.type을 통해서 답변 대기중, 답변 완료를 구별하여 렌더링
</script>
