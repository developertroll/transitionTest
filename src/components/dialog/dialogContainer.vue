<script setup>
import { useDialogStore } from '@/stores/dialog'
import { watch } from 'vue'
const dialog = useDialogStore()
const prop = defineProps({
  props: Object,
  signal: Boolean
})
watch(
  () => prop.signal,
  (newVal) => {
    if (!newVal) {
      dialog.closeDialog()
    }
  }
)
</script>

<template>
  <v-dialog :model-value="signal">
    <v-card>
      <v-card-title>
        <slot name="cardTitle"></slot>
      </v-card-title>
      <v-card-text>
        <slot :props="props" name="text"></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
