<script setup>
// import nonSlotRow from '../common/nonSlotRow.vue'
import contactTitle from './detail/contactTitle.vue'
import contactContent from './detail/contactContent.vue'

defineOptions({
  name: 'detailContact'
})
defineProps({
  props: Object
})
console.log('detailContact 실행됨')
// idx, title, tag, date, status 구별, content는 다른 컴포넌트로 처리
// props: { idx: 0, title: 'title', tag: 'tag', date: 'date', content: 'content' }
</script>

<template>
  <v-card>
    <v-card-text>
      <contactTitle :props="props"></contactTitle>
      <contactContent :props="props"></contactContent>
    </v-card-text>
  </v-card>
</template>
