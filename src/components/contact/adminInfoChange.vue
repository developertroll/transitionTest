<template>
  <v-card>
    <template v-if="!edit">
      <v-card-text>
        <userInfo :props="props"></userInfo>
      </v-card-text>
      <v-divider></v-divider>
      <div class="align-center d-flex justify-center">
        <v-btn @click="edit = true" color="primary">수정</v-btn>
      </div>
    </template>
    <template v-else>
      <v-card-text>
        <editInfo :props="props"></editInfo>
      </v-card-text>
      <v-divider></v-divider>
      <div class="align-center d-flex justify-center">
        <v-btn @click="submit" color="primary">제출</v-btn>
        <v-btn @click="edit = false" color="warning">취소</v-btn>
      </div>
    </template>
  </v-card>
</template>

<script setup>
import editInfo from '../admin/editInfo.vue'
import userInfo from '../admin/userInfo.vue'
import { useDialogStore } from '@/stores/dialog'
import { ref } from 'vue'
import { login } from '@/composables/login'
import { company } from '@/composables/company'
import { useToast } from '@/composables/toastC'

const toast = useToast()
const dStore = useDialogStore()
const edit = ref(false)
const parent = defineProps({
  props: Object
})
const props = JSON.parse(JSON.stringify(parent.props))
// props idx 제거 후 이게 company, admin, user인지 확인
// props에서 companyName 여부로 company인지 확인, grade 여부로 admin인지 확인 후 각각 translateKey로 번역
const idx = parseInt(props.idx)
delete props.idx
let translateKey
let type = ''
if (props.companyName) {
  translateKey = company().companyTranslate
  type = 'company'
} else if (props.grade) {
  translateKey = login().translateKey
  type = 'admin'
} else {
  translateKey = login().translateKey
  type = 'customer'
}

// props의 key를 translateKey로 번역
for (let key in props) {
  if (translateKey[key]) {
    props[translateKey[key]] = props[key]
    delete props[key]
  }
}

function submit() {
  // translateKey로 되있는 key를 다시 원래 key로 번역
  for (let key in props) {
    let originalKey = Object.keys(translateKey).find((k) => translateKey[k] === key)
    if (originalKey) {
      props[originalKey] = props[key]
      delete props[key]
    }
  }
  // props idx 추가 후 수정 요청
  props.idx = idx
  console.log(props)
  if (type === 'company') {
    company().updateCompany(props)
  } else {
    login().updateUser(props, type)
  }
  toast.sendToast('success', 'update')
  dStore.closeDialog()
}
</script>
