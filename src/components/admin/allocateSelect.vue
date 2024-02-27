<template>
  <v-select
    v-model="selectedAdmin"
    :items="adminList"
    label="담당자"
    item-text="title"
    item-value="value"
    outlined
    dense
  >
  </v-select>
</template>

<script setup>
import { login } from '@/composables/login'
import { ref, watch } from 'vue'
const props = defineProps({
  props: { default: undefined }
})
const adminList = login().getAdminList()
const selectedAdmin = props.props === undefined ? ref('') : ref(props.props)
const emit = defineEmits(['selectAdmin'])
watch(selectedAdmin, (newVal) => {
  emit('selectAdmin', newVal)
})
</script>
