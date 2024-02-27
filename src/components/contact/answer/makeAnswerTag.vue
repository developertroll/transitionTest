<template>
  <v-card>
    <v-card-title
      >태그 설정
      <v-tooltip text="관리자 계정에서만 공유되는 태그입니다">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" icon="fas fa-circle-info" size="x-small"></v-icon>
        </template>
      </v-tooltip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-chip-group multiple v-model="tagGroup">
          <v-chip v-for="tag in tags" :key="tag.id" variant="outlined" filter>
            {{ tag.name }}
          </v-chip>
        </v-chip-group>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { adminTag } from '@/composables/adminTag'
import { ref, watch } from 'vue'
const tags = adminTag().tags
const tagGroup = ref([])
const emit = defineEmits(['tagChoose'])
watch(
  () => tagGroup.value,
  () => {
    emit('tagChoose', tagGroup.value)
  }
)
</script>
