<script setup>
import contactTitle from './detail/contactTitle.vue'
import contactContent from './detail/contactContent.vue'
import contactAnswer from './answer/contactAnswer.vue'

import { useContactStore } from '@/stores/contact'
import { useDialogStore } from '@/stores/dialog'
import { useToast } from '@/composables/toastC'
import { ref } from 'vue'
const cStore = useContactStore()
defineOptions({
  name: 'awaitDetailContact'
})
const props = defineProps({
  props: Object
})

const reQ = ref(false)
const reQContent = ref('')
function endContact() {
  cStore.finishContact(props.props.idx)
  useToast().sendToast('success', 'contactEnd')
  useDialogStore().closeDialog()
}
function reContact() {
  // 이 컴포넌트 안에서 버튼 div가 사라지고 textarea가 나오고, 제출버튼이 눌리면 됨
  reQ.value = true
}

function reSubmit() {
  cStore.createReContact(props.props.idx, reQContent.value)
  useToast().sendToast('success', 'reContact')
  useDialogStore().closeDialog()
}
</script>

<template>
  <v-card>
    <v-card-text>
      <contactTitle :props="props.props"></contactTitle>
      <contactContent :props="props.props"></contactContent>
      <v-card>
        <v-card-title>답변</v-card-title>
        <v-card-text>
          <contactAnswer :props="props.props"></contactAnswer>
        </v-card-text>
      </v-card>
      <div class="d-flex justify-center" v-if="!reQ">
        <v-btn color="primary" @click="endContact">문의 완료</v-btn>
        <v-btn color="warning" @click="reContact">재문의</v-btn>
      </div>
      <div v-else>
        <v-textarea v-model="reQContent" label="재문의 내용" required></v-textarea>
        <div class="d-flex justify-center">
          <v-btn @click="reSubmit" color="primary">재문의 제출</v-btn>
          <v-btn @click="reQ = !reQ" color="warning">취소</v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
