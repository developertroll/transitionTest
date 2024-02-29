<script setup>
import contactTitle from './detail/contactTitle.vue'
import contactContent from './detail/contactContent.vue'
import reQAContent from './detail/reQAContent.vue'
import contactAnswer from './answer/contactAnswer.vue'
import { useContactStore } from '@/stores/contact'

const cStore = useContactStore()
const { getReContact } = cStore

defineOptions({
  name: 'detailContact'
})
const parent = defineProps({
  props: Object
})
const props = parent.props ? parent.props : parent
</script>

<template>
  <v-card>
    <v-card-text>
      <contactTitle :props="props"></contactTitle>
      <contactContent :props="props"></contactContent>
      <div v-if="getReContact(props.idx)">
        <contactAnswer :props="props"></contactAnswer>
        <v-divider></v-divider>
        <reQAContent :props="props"></reQAContent>
      </div>
    </v-card-text>
  </v-card>
</template>
