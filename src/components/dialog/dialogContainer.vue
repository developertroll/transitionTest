<script setup>
import { useDialogStore } from '@/stores/dialog'

const dialog = useDialogStore()
defineProps({
  props: Object,
  signal: Boolean,
  title: String
})
</script>

<template>
  <v-dialog :model-value="signal" @click:outside="dialog.closeDialog">
    <v-card>
      <v-card-title>
        <div class="d-flex justify-space-between align-md-baseline">
          <div class="text-md-h5 align-baseline">
            {{ title }}
          </div>

          <v-btn icon @click="dialog.closeDialog()"><v-icon icon="fas fa-xmark"></v-icon></v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <slot :props="props" name="text"></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
