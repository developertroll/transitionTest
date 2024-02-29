<template>
  <v-row>
    <template v-for="(value, key) in info">
      <nonSlotRow
        :title="key"
        :value="value"
        v-if="typeof value === 'string'"
        :key="key"
      ></nonSlotRow>
      <template v-else>
        <!-- styledRow 넣고 chip으로 묶기 -->
        <styledRow :title="key" :value="value" :key="key">
          <tagGroup :tags="value"></tagGroup>
        </styledRow>
      </template>
    </template>
  </v-row>
</template>

<script setup>
import nonSlotRow from '../common/nonSlotRow.vue'
import styledRow from '../common/styledRow.vue'
import tagGroup from '../board/tagGroup.vue'

const props = defineProps({
  props: Object
})
// info는 idx를 제외한 모든 정보를 가짐
const info = JSON.parse(JSON.stringify(props.props))
if (info.idx) {
  delete info.idx
}
</script>
