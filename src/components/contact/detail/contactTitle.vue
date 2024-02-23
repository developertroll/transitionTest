<template>
  <v-container class="border-md fill-hieght" fluid>
    <v-row>
      <v-col cols="2" class="text-center border-md ma-auto"> 문의 번호 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ props.idx }}
      </v-col>
      <v-col cols="2" class="text-center border-md ma-auto"> 문의 날짜 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ moment(props.date).format('YYYY-MM-DD') }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="text-center border-md ma-auto"> 문의 제목 </v-col>
      <v-col cols="10" class="text-center border-md ma-auto">
        {{ props.title }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="text-center border-md ma-auto h-auto"> 문의 상태 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ props.status }}
      </v-col>
      <v-col cols="2" class="text-center border-md ma-auto"> 답변 여부 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ props.answer === '' ? '미답변' : '답변' }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="text-center border-md ma-auto h-fit"> 문의 분류 </v-col>
      <v-col cols="10" class="text-center ma-auto h-fit">
        <tagGroup :tags="props.tag"></tagGroup>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import moment from 'moment'
import tagGroup from '../../board/tagGroup.vue'

defineProps({
  props: Object
})
</script>
