<template>
  <v-card>
    <v-card-title class="text-h6"> 회원 정보 수정 요청 양식 </v-card-title>
    <v-form v-model="valid" @submit.prevent="onSubmit" ref="reqForm" :disabled="valid">
      <v-container>
        <template v-for="(value, key) in newForm" :key="key">
          <v-row>
            <styledRow :title="idTranslate[key]" :value="value">
              <v-text-field
                v-model="newForm[key]"
                :label="idTranslate[key]"
                :type="key === 'password' ? 'password' : 'text'"
                :rules="[rules.required, rules[key]]"
                :value="value"
                :hint="hint[key]"
                required
              ></v-text-field>
            </styledRow>
          </v-row>
        </template>
        <v-row>
          <v-col cols="4" offset="6">
            <v-btn @click="validateChk">요청</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import styledRow from '@/components/common/styledRow.vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { login } from '@/composables/login'
import { useRouter } from 'vue-router'
import { useToast } from '@/composables/toastC'

const router = useRouter()
const reqForm = ref(null)
const toast = useToast()

const logi = login()
const ogForm = logi.findUserByIdx(
  parseInt(router.currentRoute.value.params.idx, 10),
  router.currentRoute.value.params.type
)
const store = useContactStore()
const store1 = useIsLoggedInStore()
const { idTranslate } = storeToRefs(store1)
let valid = false
let newForm = ref({
  id: '',
  password: '',
  name: '',
  email: '',
  phone: ''
})

for (const key in newForm.value) {
  newForm.value[key] = ogForm[key]
}

function validChk() {
  console.log(newForm.value, ogForm)
}
function onSubmit() {
  if (!newForm.value) {
    return
  }
  validChk()
}

function sendRequest(value) {
  store.createContact({
    tag: ['고객센터', '회원 정보 수정'],
    title: '회원정보 수정 요청',
    content: value,
    writer: ogForm.idx,
    date: new Date().toISOString()
  })
}

const rules = {
  required: (value) => !!value || '필수 입력 항목입니다.',
  id: (v) => v.length >= 8 || '최소 8자 이상 입력해주세요.',
  password: (value) => {
    const pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
    return pattern.test(value) || '영문, 숫자, 특수문자를 포함한 8~16자로 입력해주세요.'
  },
  email: (value) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return pattern.test(value) || '유효한 이메일 주소를 입력해주세요.'
  },
  phone: (value) => {
    const pattern = /^\d{3}-\d{3,4}-\d{4}$/
    return pattern.test(value) || '유효한 전화번호를 입력해주세요.'
  },
  name: (value) => {
    const pattern = /^[가-힣]{2,4}$/
    return pattern.test(value) || '한글 이름을 입력해주세요.'
  }
}

const hint = {
  id: '8자 이상 입력해주세요.',
  password: '영문, 숫자, 특수문자를 포함한 8~16자로 입력해주세요.',
  email: '유효한 이메일 주소를 입력해주세요.',
  phone: '000-0000-0000 형식으로 입력해주세요.',
  name: '한글 이름을 입력해주세요.'
}

async function validateChk() {
  const { valid } = await reqForm.value.validate()
  if (valid) {
    console.log('valid')
    // ogForm과 newForm.value가 같으면 수정하지 않은 것으로 간주, invalid로 처리
    if (JSON.stringify(ogForm) === JSON.stringify(newForm.value)) {
      console.log('수정하지 않았습니다.')
      setTimeout(() => reqForm.value.resetValidation(), 2000)
    } else {
      console.log('수정요청')
      // newForm.value와 ogForm의 차이를 포함시켜 문장으로 만들어 요청
      const diff = Object.keys(newForm.value).filter((key) => newForm.value[key] !== ogForm[key])
      const diffStr = diff
        .map((key) => `${idTranslate.value[key]}: ${ogForm[key]} -> ${newForm.value[key]}`)
        .join('\n')
      sendRequest(`회원 정보 수정 요청 \n\n 변경된 내용 \n${diffStr}`)
      toast.sendToast('success', 'request')
      router.push('/')
    }
  } else {
    console.log('invalid')
    setTimeout(() => reqForm.value.resetValidation(), 2000)
  }
}
</script>
