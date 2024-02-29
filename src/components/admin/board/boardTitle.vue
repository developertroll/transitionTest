<template>
  <v-container class="border-md fill-hieght" fluid>
    <v-row>
      <v-col cols="2" class="text-center border-md ma-auto"> 번호 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ props.idx }}
      </v-col>
      <v-col cols="2" class="text-center border-md ma-auto"> 날짜 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ moment(props.createAt).format('YYYY-MM-DD') }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="text-center border-md ma-auto"> 제목 </v-col>
      <v-col cols="10" class="text-center border-md ma-auto">
        {{ props.title }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="text-center border-md ma-auto h-auto"> 작성자 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ login().findUserByIdx(props.writer).name }}
      </v-col>
      <v-col cols="2" class="text-center border-md ma-auto h-auto"> 조회수 </v-col>
      <v-col cols="4" class="text-center border-md ma-auto">
        {{ props.views }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import moment from 'moment'
import { login } from '@/composables/login'

defineProps({
  props: Object
})
</script>
