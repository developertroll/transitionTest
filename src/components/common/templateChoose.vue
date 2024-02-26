<template>
  <v-card>
    <v-card-title>이 내용의 문의인가요?</v-card-title>
    <v-card-subtitle>아래 버튼들을 통해 빠르게 문의가 가능합니다</v-card-subtitle>
    <v-card-text>
      <v-list variant="elevated" lines="three">
        <v-list-item v-for="template in templateList" :key="template.id" density="comfortable">
          <template v-slot:prepend>
            <v-list-item-action>
              <v-btn @click="templateChoose(template.id)" :icon="template.icon"></v-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>{{ template.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ template.content }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { faqTemplate } from '@/composables/faqTemplate'
const emit = defineEmits(['templateChoose'])

const { templateList } = faqTemplate()
const templateChoose = (id) => {
  emit('templateChoose', id)
}
</script>
