<template>
  <template v-for="item of reContact" :key="item.idx">
    <v-card v-if="item.question !== ''">
      <v-card-title>추가 질문</v-card-title>
      <v-card-text>
        <p v-html="item.question"></p>
      </v-card-text>
    </v-card>
    <v-card v-if="item.answer !== ''">
      <v-card-title>답변</v-card-title>
      <v-card-text>
        <p v-html="item.answer"></p>
      </v-card-text>
    </v-card>
  </template>
  <v-textarea
    v-if="writing && iStore.uTypeChk === 'admin'"
    v-model="reAnswer"
    label="답변"
    outlined
  ></v-textarea>
  <v-textarea
    v-if="writing && iStore.uTypeChk === 'customer'"
    v-model="reQuestion"
    label="추가 질문"
    outlined
  ></v-textarea>
  <div class="d-flex justify-center" v-if="reContact && reContact.length > 0 && !writing">
    <div v-if="reContact[reContact.length - 1].answer === '' && iStore.uTypeChk === 'admin'">
      <v-btn color="primary" @click="openWrite">답변 작성</v-btn>
    </div>
    <div v-if="reContact[reContact.length - 1].answer !== '' && iStore.uTypeChk === 'customer'">
      <v-btn color="primary" @click="endReContact">문의 완료</v-btn>
      <v-btn color="warning" @click="openWrite">재문의</v-btn>
    </div>
  </div>
  <div class="d-flex justify-center" v-if="writing">
    <v-btn color="primary" @click="submitReContact">제출</v-btn>
    <v-btn color="warning" @click="cancelReContact">취소</v-btn>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useContactStore } from '@/stores/contact'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { useDialogStore } from '@/stores/dialog'
import { useToast } from '@/composables/toastC'
import { ref } from 'vue'
const cStore = useContactStore()
const iStore = useIsLoggedInStore()
const dStore = useDialogStore()
const toast = useToast()
const { getReContact } = cStore
const props = defineProps({
  props: Object
})
const writing = ref(false)
const reAnswer = ref('')
const reQuestion = ref('')
function openWrite() {
  writing.value = true
}
function cancelReContact() {
  writing.value = false
}
function endReContact() {
  cStore.finishReContact(props.props.idx)
  toast.sendToast('success', 'reContactEnd')
  dStore.closeDialog()
}
function submitReContact() {
  if (iStore.uTypeChk === 'admin') {
    cStore.answerReContact(props.props.idx, reAnswer.value)
    toast.sendToast('success', 'reContactAnswer')
  } else {
    cStore.createReContact(props.props.idx, reQuestion.value)
    toast.sendToast('success', 'reContact')
  }
  writing.value = false
  dStore.closeDialog()
}
const reContact = getReContact(props.props.idx)
const formattedReContact = computed(() => {
  if (reContact) {
    reContact.forEach((item) => {
      item.question = item.question ? item.question.replace(/\n/g, '<br>') : ''
      item.answer = item.answer ? item.answer.replace(/\n/g, '<br>') : ''
    })
  }
})
// reContact의 question, answer를 각각 확인, 존재하는 것들을 출력

const formattedContent = computed(() => {
  if (props.props.content) {
    return props.props.content.replace(/\n/g, '<br>')
  }
  return ''
})
</script>
