<template>
  <g etype="Rooms" style="">
    <g etype="Room" puid="p2" transform="translate(3750,3750)" pointer-events="all">
      <pattern id="uid21" patternUnits="userSpaceOnUse" x="0" y="0" spreadMethod="reflect" width="100"
               height="100" patternTransform="rotate(-0)">
        <image x="0" y="0" width="100" height="100" image-rendering="optimizeQuality"
               xlink:href="https://sportmir.kz/UPLOAD/2019/06/20/th_salsa_oak_nature1_400_400.jpg"></image>
      </pattern>
      <g etype="selector" style="">
        <path stroke="none" fill="none" id="uid50" d="M0,0L510,0L510,510L0,510L0,0" etype="path"
              cursor="move"></path>
      </g>
      <WallsBlock/>
      <DimentionsBlock/>
      <PointsBlock/>
      <text etype="text" x="254.99999999999994" y="258" text-anchor="middle" text-rendering="optimizeSpeed"
            font-size="12" fill="#000" stroke="#000" filter="url(#uid0)" style="">Жилая комната (24.980 m2)
      </text>
      <text etype="text" x="254.99999999999994" y="258" text-anchor="middle" text-rendering="optimizeSpeed"
            font-size="12" fill="#eee" cursor="move" style="">Жилая комната (24.980 m2)
      </text>
    </g>
  </g>
</template>

<script setup lang="ts">
import WallsBlock from './walls.vue'
import PointsBlock from './points.vue'
import DimentionsBlock from './dimentions.vue'
</script>

<style scoped>

</style>