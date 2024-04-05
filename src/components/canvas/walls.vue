<template>
  <g etype="walls">
    <WallBlock
      v-for="(coordinate, index) in coordinates"
      :key="index"
      :puid="`p${3 * (index + 1)}`"
      :id="`wall-${index + 1}`"
      :coordinate="coordinate"
    />
<!--    <g etype="wall" puid="p3">-->
<!--      <path fill="#5f6975" stroke-linecap="square" stroke="#5f6975" stroke-width="0" stroke-opacity="1"-->
<!--            id="uid22" d="M-5,-5 5.1,5.100000000000023 504.9,5.1 515,-5 -5,-5 " etype="path"-->
<!--            opacity="1"></path>-->
<!--      <path fill="red" id="uid23" d="M5.099999999999999,0.10000000000002274L504.9,0.09999999999999964"-->
<!--            etype="path"></path>-->
<!--      <path class="wallSelector" stroke-linecap="square" cursor="move" stroke="#5f6975"-->
<!--            stroke-opacity="0.01" opacity="0" id="uid24"-->
<!--            d="M-5,-5 5.1,5.100000000000023 504.9,5.1 515,-5 -5,-5 " etype="path"></path>-->
<!--    </g>-->
<!--    <g etype="wall" puid="p6">-->
<!--      <path fill="#00b368" stroke-linecap="square" stroke="#5f6975" stroke-width="0" stroke-opacity="1"-->
<!--            id="uid29" d="M515,-5 504.9,5.1 504.9,504.9 515,515 515,-5 " etype="path"-->
<!--            opacity="1"></path>-->
<!--      <path fill="red" id="uid30" d="M509.9,5.1L509.9,504.9" etype="path"></path>-->
<!--      <path class="wallSelector" stroke-linecap="square" cursor="move" stroke="#5f6975"-->
<!--            stroke-opacity="0.01" opacity="0" id="uid31"-->
<!--            d="M515,-5 504.9,5.1 504.9,504.9 515,515 515,-5 " etype="path"></path>-->
<!--    </g>-->
<!--    <g etype="wall" puid="p9">-->
<!--      <path fill="#00b368" stroke-linecap="square" stroke="#5f6975" stroke-width="0" stroke-opacity="1"-->
<!--            id="uid36" d="M515,515 504.9,504.9 5.100000000000023,504.9 -5,515 515,515 " etype="path"-->
<!--            opacity="1"></path>-->
<!--      <path fill="red" id="uid37" d="M504.9,509.9L5.100000000000023,509.9" etype="path"></path>-->
<!--      <path class="wallSelector" stroke-linecap="square" cursor="move" stroke="#5f6975"-->
<!--            stroke-opacity="0.01" opacity="0" id="uid38"-->
<!--            d="M515,515 504.9,504.9 5.100000000000023,504.9 -5,515 515,515 " etype="path"></path>-->
<!--    </g>-->
<!--    <g etype="wall" puid="p12">-->
<!--      <path fill="#00b368" stroke-linecap="square" stroke="#5f6975" stroke-width="0" stroke-opacity="1"-->
<!--            id="uid43" d="M-5,515 5.100000000000023,504.9 5.1,5.100000000000023 -5,-5 -5,515 "-->
<!--            etype="path" opacity="1"></path>-->
<!--      <path fill="red" id="uid44" d="M0.10000000000002274,504.9L0.09999999999999964,5.100000000000022"-->
<!--            etype="path"></path>-->
<!--      <path class="wallSelector" stroke-linecap="square" cursor="move" stroke="#5f6975"-->
<!--            stroke-opacity="0.01" opacity="0" id="uid45"-->
<!--            d="M-5,515 5.100000000000023,504.9 5.1,5.100000000000023 -5,-5 -5,515 " etype="path"></path>-->
<!--    </g>-->
  </g>
</template>

<script setup lang="ts">
import WallBlock from './wall.vue'
import {ref} from 'vue'
const coordinates = ref([
  'M-5,-5 5.1,5.100000000000023 504.9,5.1 515,-5 -5,-5',
  'M515,-5 504.9,5.1 504.9,504.9 515,515 515,-5',
  'M515,515 504.9,504.9 5.100000000000023,504.9 -5,515 515,515',
  'M-5,515 5.100000000000023,504.9 5.1,5.100000000000023 -5,-5 -5,515'
])
</script>

<style scoped>

</style>