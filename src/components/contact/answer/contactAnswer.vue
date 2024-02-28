<template>
  <v-card>
    <v-card-title>답변자: {{ allocatedAdminName }}</v-card-title>
    <v-card-text>
      <p v-html="formattedContent"></p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { login } from '@/composables/login'
const props = defineProps({
  props: Object
})

const formattedContent = computed(() => {
  if (props.props.answer) {
    return props.props.answer.replace(/\n/g, '<br>')
  }
  return ''
})

const logins = login()

const allocatedAdminName = computed(() => {
  if (props.props.allocatedAdmin !== null || props.props.allocatedAdmin !== undefined) {
    const admin = logins.findUserByIdx(parseInt(props.props.allocatedAdmin), 'admin')
    if (admin) {
      return `${admin.name}(${admin.grade})`
    }
  }
  return ''
})
</script>
