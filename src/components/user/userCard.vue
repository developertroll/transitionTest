<template>
  <v-card variant="flat">
    <v-card-title>
      <v-avatar>
        <v-img :src="user.avatar" />
      </v-avatar>
      <span>{{ user.name }}</span>
    </v-card-title>
    <v-card-text>
      <p>{{ user.email }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
const user = defineProps({
  user: Object
})
</script>
