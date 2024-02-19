<template>
  <div class="bgImage">
    <v-container class="routerContainer bg-blue-lighten-5">
      <router-view></router-view>
    </v-container>
  </div>
</template>

<style scoped>
.bgImage {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../../assets/background.jpg'); /* 이미지 경로를 적절히 설정 */
  background-size: cover; /* 이미지를 컨테이너에 맞게 조절 */
  text-align: center;
}

.routerContainer {
  display: flex;
  flex-grow: 1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  min-width: 50vw;
  min-height: 50vh;
  align-items: center;
  justify-content: center;
}
</style>
