<template>
  <g etype="Rooms" style="">
    <g etype="Room" puid="p2" transform="translate(3750,3750)" pointer-events="all">
      <pattern id="uid21" patternUnits="userSpaceOnUse" x="0" y="0" spreadMethod="reflect" width="100"
               height="100" patternTransform="rotate(-0)">
        <image x="0" y="0" width="100" height="100" image-rendering="optimizeQuality"
               xlink:href="https://sportmir.kz/UPLOAD/2019/06/20/th_salsa_oak_nature1_400_400.jpg"></image>
      </pattern>
      <g etype="selector" style="">
        <path stroke="none" fill="none" id="uid50" :d="coordinates" etype="path"
              cursor="move"></path>
      </g>
      <WallsBlock/>
      <DimentionsBlock/>
      <PointsBlock/>
      <text etype="text" x="254.99999999999994" y="258" text-anchor="middle" text-rendering="optimizeSpeed"
            font-size="12" fill="#000" stroke="#000" filter="url(#uid0)" style="">Жилая комната ({{ volume }} m2)
      </text>
      <text etype="text" x="254.99999999999994" y="258" text-anchor="middle" text-rendering="optimizeSpeed"
            font-size="12" fill="#eee" cursor="move" style="">Жилая комната ({{ volume }} m2)
      </text>
    </g>
  </g>
</template>

<script setup lang="ts">
import WallsBlock from './walls.vue'
import PointsBlock from './points.vue'
import DimentionsBlock from './dimentions.vue'
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
const volume = computed(() => Math.abs(storeCoordinates.p2[0] - storeCoordinates.p1[0]) * Math.abs(storeCoordinates.p2[1] - storeCoordinates.p5[1]) / 10000)
</script>

<style scoped>

</style>