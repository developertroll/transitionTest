<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="form.title" label="제목" required></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12">
          <v-textarea v-model="form.content" label="내용" required></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>파일 업로드(실제로는 구현 안되어 있으며 PH파일이 올라갑니다)</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn @click="submit">등록</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useAdminBoardStore } from '@/stores/adminBoard'
import { useIsLoggedInStore } from '@/stores/isLoggedIn'
import { useRouter } from 'vue-router'
import { useToast } from '@/composables/toastC'

const toast = useToast()
const router = useRouter()
const aStore = useAdminBoardStore()
const iStore = useIsLoggedInStore()

const form = ref({
  title: '',
  content: '',
  file: [1, 3, 5]
})

const submit = () => {
  if (form.value.title === '' || form.value.content === '') {
    alert('제목과 내용은 필수 입력사항입니다.')
    return
  }
  aStore.createBoard({
    title: form.value.title,
    content: form.value.content,
    writer: iStore.logObj.idx,
    file: form.value.file
  })
  toast.sendToast('success', 'boardWrite')
  router.push('/data')
}
</script>
