<template>
  <v-card>
    <v-card-title>첨부 파일</v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="file of props.files"
          :key="file"
          cols="12"
          class="text-center border-md ma-auto"
        >
          <p @click="downloadFile(file)">{{ `${file} + 파일` }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  props: Object
})
function downloadFile(idx) {
  alert('파일 다운로드 기능 실행(실제로는 안됨) + 파일 번호: ' + idx)
}
</script>
