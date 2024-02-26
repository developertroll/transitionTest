<script setup>
import { useDialogStore } from '@/stores/dialog'

const dialog = useDialogStore()
defineProps({
  props: Object,
  signal: Boolean
})
</script>

<template>
  <v-dialog :model-value="signal" @click:outside="dialog.closeDialog">
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
