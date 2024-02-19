<template>
  <v-table>
    <tbody>
      <tr v-for="users in user.user" :key="users.id">
        <td>{{ users.name }}</td>
        <td>{{ users.email }}</td>
        <td>{{ users.phone }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const user = defineProps({
  user: Object
})
</script>
