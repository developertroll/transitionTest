<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>답변</v-card-title>
          <v-card-text>
            <v-textarea v-model="form.answer" label="답변" required></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <adminExplain :descProp="form.adminDescription"></adminExplain>
      </v-col>
      <v-col cols="12">
        <makeAnswerTag :answerProp="form.answer" @tagChoose="addTag"></makeAnswerTag>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn @click="submitForm" color="primary">제출</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { ref } from 'vue'
import { explaination } from '@/composables/explaination'
import adminExplain from './adminExplain.vue'
import makeAnswerTag from './makeAnswerTag.vue'
import { adminTag } from '@/composables/adminTag'

const emit = defineEmits(['pushAnswer'])
const adminTags = adminTag().tags
const props = defineProps({
  contactIdx: Number
})
const store = useContactStore()
const { getContactByIdx } = store
const contact = getContactByIdx(props.contactIdx)
const explainTemplate = explaination().tagRelatedTemplate
const form = ref({
  answer: '',
  adminDescription: '',
  adminTag: []
})
function titleToTag(title) {
  for (const tag in translateTag) {
    if (title.includes(tag)) {
      return translateTag[tag]
    }
  }
}
function addTag(tag) {
  form.value.adminTag = []
  tag.forEach((tag) => {
    form.value.adminTag.push(adminTags[tag].idx)
  })
}

const translateTag = {
  삭제: 'request-delete',
  수정: 'request-update',
  에러: 'request-error',
  개선: 'request-improve'
}
// contact.title에서 '삭제' '수정' '에러' '개선' 가 포함되어있으면 해당하는 태그로 assign
const targetTemplate = explainTemplate.find((template) => {
  return template.tag === titleToTag(contact.title)
})
console.log(targetTemplate)
form.value.adminDescription = targetTemplate.explainTemplate
form.value.answer = targetTemplate.answerTemplate

function submitForm() {
  emit('pushAnswer', form.value)
}
</script>
