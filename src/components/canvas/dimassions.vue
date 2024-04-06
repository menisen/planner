<template>
  <g etype="AllDimansions">
    <DimassionBlock />


<!--    <path fill="#ffffff" fill-opacity="0.3" filter="url(#uid19)" id="uid105"-->
<!--          d="M4296,4017.6640625L4296,3992.3359375L4314,3992.3359375L4314,4017.6640625L4296,4017.6640625"-->
<!--          etype="path"></path>-->
<!--    <text etype="text" text-rendering="optimizeSpeed" font-size="12px" font-family="Open Sans"-->
<!--          font-weight="600" fill="black">-->
<!--      <textPath xlink:href="#uid104" startOffset="240.40195312499986">-->
<!--        <tspan pointer-events="none" dy="3.5">5 m</tspan>-->
<!--      </textPath>-->
<!--    </text>-->
<!--    <path stroke="black" marker-start="url(#uid17)" marker-end="url(#uid15)" id="uid104"-->
<!--          d="M4305,4254.9L4305,3755.1" etype="path"-->
<!--          stroke-dasharray="0 1 234.40195312499986 28.99609375 234.40195312499986 1"></path>-->
<!--    <path stroke="#8A8A8A" stroke-dasharray="8 8" id="uid106" d="M4254.9,3755.1L4315,3755.1"-->
<!--          etype="path"></path>-->
<!--    <path stroke="#8A8A8A" stroke-dasharray="8 8" id="uid107" d="M4254.9,4254.9L4315,4254.9"-->
<!--          etype="path"></path>-->
<!--    <path fill="#ffffff" fill-opacity="0.3" filter="url(#uid19)" id="uid109"-->
<!--          d="M3992.3359375,4296L4017.6640625,4296L4017.6640625,4314L3992.3359375,4314L3992.3359375,4296"-->
<!--          etype="path"></path>-->
<!--    <text etype="text" text-rendering="optimizeSpeed" font-size="12px" font-family="Open Sans"-->
<!--          font-weight="600" fill="black">-->
<!--      <textPath xlink:href="#uid108" startOffset="240.40195312499986">-->
<!--        <tspan pointer-events="none" dy="3.5">5 m</tspan>-->
<!--      </textPath>-->
<!--    </text>-->
<!--    <path stroke="black" marker-start="url(#uid17)" marker-end="url(#uid15)" id="uid108"-->
<!--          d="M3755.1,4305L4254.9,4305" etype="path"-->
<!--          stroke-dasharray="0 1 234.40195312499986 28.99609375 234.40195312499986 1"></path>-->
<!--    <path stroke="#8A8A8A" stroke-dasharray="8 8" id="uid110" d="M4254.9,4315L4254.9,4254.9"-->
<!--          etype="path"></path>-->
<!--    <path stroke="#8A8A8A" stroke-dasharray="8 8" id="uid111" d="M3755.1,4315L3755.1,4254.9"-->
<!--          etype="path"></path>-->
<!--    <path fill="#ffffff" fill-opacity="0.3" filter="url(#uid19)" id="uid113"-->
<!--          d="M3714,3992.3359375L3714,4017.6640625L3696,4017.6640625L3696,3992.3359375L3714,3992.3359375"-->
<!--          etype="path"></path>-->
<!--    <text etype="text" text-rendering="optimizeSpeed" font-size="12px" font-family="Open Sans"-->
<!--          font-weight="600" fill="black">-->
<!--      <textPath xlink:href="#uid112" startOffset="240.40195312499986">-->
<!--        <tspan pointer-events="none" dy="3.5">5 m</tspan>-->
<!--      </textPath>-->
<!--    </text>-->
<!--    <path stroke="black" marker-start="url(#uid17)" marker-end="url(#uid15)" id="uid112"-->
<!--          d="M3705,4254.9L3705,3755.1" etype="path"-->
<!--          stroke-dasharray="0 1 234.40195312499986 28.99609375 234.40195312499986 1"></path>-->
<!--    <path stroke="#8A8A8A" stroke-dasharray="8 8" id="uid114" d="M3695,4254.9L3755.1,4254.9"-->
<!--          etype="path"></path>-->
<!--    <path stroke="#8A8A8A" stroke-dasharray="8 8" id="uid115" d="M3695,3755.1L3755.1,3755.1"-->
<!--          etype="path"></path>-->
  </g>
</template>

<script setup lang="ts">
import DimassionBlock from './dimassion.vue'
import {useWallsStore} from '../../store'
import {computed} from 'vue'

const wallsStore = useWallsStore()
const storeCoordinates = wallsStore.coordinates
const coordinates = computed(() => {
  const p1 = (storeCoordinates.p0[0] + storeCoordinates.p1[0]) / 2
  const p2 = (storeCoordinates.p0[1] + storeCoordinates.p1[1]) / 2
  const p3 = (storeCoordinates.p2[0] + storeCoordinates.p3[0]) / 2
  const p4 = (storeCoordinates.p2[1] + storeCoordinates.p3[1]) / 2
  const p5 = (storeCoordinates.p4[0] + storeCoordinates.p5[0]) / 2
  const p6 = (storeCoordinates.p4[1] + storeCoordinates.p5[1]) / 2
  const p7 = (storeCoordinates.p6[0] + storeCoordinates.p7[0]) / 2
  const p8 = (storeCoordinates.p6[1] + storeCoordinates.p7[1]) / 2
  return `
    M${p1}, ${p2}
    L${p3}, ${p4}
    L${p5}, ${p6}
    L${p7}, ${p8}
    L${p1}, ${p2}
  `
})
</script>

<style scoped>
</style>
