<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="form.title" label="제목" required></v-text-field>
        </v-col>
      </v-row>
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
import { useToast } from '@/composables/toastC'
import { useRouter } from 'vue-router'

const router = useRouter()
const aStore = useAdminBoardStore()
const iStore = useIsLoggedInStore()
const toast = useToast()

const props = aStore.getBoard(parseInt(router.currentRoute.value.params.idx))
const form = ref({
  title: props.title,
  content: props.content,
  file: props.file
})

const submit = () => {
  aStore.updateBoard({
    idx: props.idx,
    title: form.value.title,
    content: form.value.content,
    writer: iStore.logObj.idx,
    file: form.value.file
  })
  toast.sendToast('success', 'boardUpdate')
  router.push('/data')
}
</script>
