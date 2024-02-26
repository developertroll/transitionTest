<template>
  <v-card>
    <v-card-text>
      <v-row>
        <template v-for="(value, key) in writedRows" :key="key">
          <nonSlotRow :title="key" :value="value"></nonSlotRow>
        </template>
      </v-row>
    </v-card-text>
    <div class="text-center text-h6">위의 내용을 확인하고 선택해주세요</div>
    <v-card-actions>
      <div class="flex-grow-1 text-center">
        <v-btn color="error" @click="goToFirst" variant="flat">처음으로</v-btn>
        <v-btn color="warning" @click="goToThird" variant="flat">상세사항 수정</v-btn>
        <v-btn color="primary" @click="confirmed" variant="flat">확인</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import nonSlotRow from '../common/nonSlotRow.vue'

const props = defineProps({
  props: Object
})
const prop = props.props
const writedRows = {
  제목: prop.title,
  개요: prop.content,
  '장소/요청': prop.location,
  발생시각: prop.time,
  기타: prop.etc
}

const emit = defineEmits(['goToFirst', 'goToThird', 'confirmed'])
const goToFirst = () => {
  emit('goToFirst')
}
const goToThird = () => {
  emit('goToThird')
}
const confirmed = () => {
  emit('confirmed')
}
</script>
