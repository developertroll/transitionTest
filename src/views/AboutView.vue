<template>
  <v-card>
    <div class="d-flex flex-no-wrap">
      <img :src="alogo2" :max-width="400" :max-height="400" cover height="200" />
      <div>
        <v-card-title class="text-h4">ALOGO</v-card-title>
        <v-card-text>
          우리 ALOGO 회사는 어쩌고 저쩌고 몇년도 창업했고, 이런저런 서비스를 제공하고 있습니다.
          <br />
          사후관리 서비스를 위해 현재 보고 계시는 사이트를 운영하고 있으며, 이 사이트를 통해
          고객님들의 문의사항을 받아들이고 있습니다.
          <br />고객님들의 문의에 대한 답변과 해결을 위해 최선을 다하겠습니다.
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import alogo2 from '@/assets/alogo-2.svg'
// const text =
//   '우리 ALOGO 회사는 어쩌고 저쩌고 몇년도 창업했고, 이런저런 서비스를 제공하고 있습니다. 사후관리 서비스를 위해 현재 보고 계시는 사이트를 운영하고 있으며, 이 사이트를 통해 고객님들의 문의사항을 받아들이고 있습니다. 고객님들의 문의에 대한 답변과 해결을 위해 최선을 다하겠습니다.'
</script>
