<template>
  <v-stepper
    hide-actions
    alt-labels
    :items="['양식 선택', '문의 양식 작성', '추가 사항', '최종 검토']"
    :model-value="currentStep"
  >
    <template v-slot:item.1>
      <templateChoose @templateChoose="createSample"></templateChoose>
    </template>
    <template v-slot:item.2>
      <contactForm @submit="saveForm"></contactForm>
    </template>
    <template v-slot:item.3>
      <detailForm @submit="saveDetail"></detailForm>
    </template>
    <template v-slot:item.4>
      <checkForm
        :props="formTemplate"
        @goToFirst="currentStep = 1"
        @goToThird="currentStep = 3"
        @confirmed="confirmed"
      ></checkForm>
    </template>
  </v-stepper>
</template>

<script setup>
import templateChoose from '@/components/common/templateChoose.vue'
import contactForm from '@/components/form/contactForm.vue'
import detailForm from '@/components/form/detailForm.vue'
import checkForm from '@/components/form/checkForm.vue'
import { faqTemplate } from '@/composables/faqTemplate'
import { ref } from 'vue'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { useContactStore } from '@/stores/contact'
import { useToast } from '@/composables/toastC'
import { useRouter } from 'vue-router'

const router = useRouter()
const toast = useToast()
const cStore = useContactStore()
const iStore = useIsLoggedInStore()
const { logObj } = iStore
const formTemplates = faqTemplate().formTemplate
const currentStep = ref(0)
const formTemplate = ref({})
const detailFormData = ref({})
const saveDetail = (detail) => {
  detailFormData.value = detail
  formTemplate.value = { ...formTemplate.value, ...detailFormData.value }
  currentStep.value = 4
}
const saveForm = (form) => {
  // formTemplate에 form.title, form.content assign
  formTemplate.value = { ...formTemplate.value, ...form }
  console.log(formTemplate.value)
  currentStep.value = 3
}
const createSample = (id) => {
  formTemplates.forEach((template) => {
    if (template.id === id) {
      formTemplate.value = template
    }
  })
  console.log(formTemplate.value.idx, typeof formTemplate.value.idx)
  formTemplate.value.idx === 4 ? (currentStep.value = 2) : (currentStep.value = 3)
  console.log(currentStep.value)
}

const confirmed = () => {
  console.log('confirmed 실행되어 문의 제작 시작')
  formTemplate.value.content = `${formTemplate.value.content} \n\n 상세 사항 \n\n 요청사항/문제사항: ${detailFormData.value.location} \n 발생시각: ${detailFormData.value.time} \n 기타사항: ${detailFormData.value.etc}`
  formTemplate.value.writer = logObj.idx
  cStore.createContact(formTemplate.value)
  toast.sendToast('success', 'request')
  router.push('/')
}
</script>
