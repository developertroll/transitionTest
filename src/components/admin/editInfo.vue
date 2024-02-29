<template>
  <v-row>
    <template v-for="(value, key) in form" :key="key">
      <styledRow :title="key">
        <v-text-field
          v-model="form[key]"
          :label="key"
          outlined
          dense
          v-if="typeof value === 'string'"
        ></v-text-field>
        <chippedSelect
          :items="items"
          :value="changeValue(value)"
          :type="true"
          @change="setValue"
          v-else
        ></chippedSelect>
      </styledRow>
    </template>
  </v-row>
</template>

<script setup>
import styledRow from '../common/styledRow.vue'
import chippedSelect from '../common/chippedSelect.vue'
import { ref } from 'vue'
import { login } from '@/composables/login'
const props = defineProps({
  props: Object
})
const form = ref(props.props)
const items = login().getWorkerArray()
function changeValue(value) {
  return login().translateWorkerArray(value)
}
function setValue(value) {
  form.value.근로자 = value
}
// 이 페이지는 props를 받아서 props의 key, value를 styledRow, v-text-field를 이용해 수정하는 페이지
// 관리자, 고객, 고객사 정보 수정 가능
</script>
