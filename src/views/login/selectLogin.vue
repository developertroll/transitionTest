<script setup></script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="display-1 text-center">환영합니다</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">로그인을 선택해주세요</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-btn
          :to="'/login/customer'"
          prepend-icon="fa-solid fa-users"
          stacked
          size="large"
          color="primary"
          >고객 로그인</v-btn
        >
      </v-col>
      <v-col cols="6">
        <v-btn
          to="/login/admin"
          prepend-icon="fa-solid fa-building-user"
          stacked
          size="large"
          color="primary"
          >관리자 로그인</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
