<template>
  <g etype="points">
    <g etype="Point" puid="p4">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p1},${points.p2})`" id="uid25"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p1},${points.p2})`"></circle>
    </g>
    <g etype="Point" puid="p5">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p3},${points.p4})`" id="uid26"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p3},${points.p4})`"></circle>
    </g>
    <g etype="Point" puid="p7">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p3},${points.p4})`" id="uid32"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p3},${points.p4})`"></circle>
    </g>
    <g etype="Point" puid="p8">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p5},${points.p6})`" id="uid33"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p5},${points.p6})`"></circle>
    </g>
    <g etype="Point" puid="p10">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p5},${points.p6})`" id="uid39"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p5},${points.p6})`"></circle>
    </g>
    <g etype="Point" puid="p11">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p7},${points.p8})`" id="uid40"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p7},${points.p8})`"></circle>
    </g>
    <g etype="Point" puid="p13">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p7},${points.p8})`" id="uid46"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p7},${points.p8})`"></circle>
    </g>
    <g etype="Point" puid="p14">
      <path stroke="#000" stroke-width="1" :transform="`translate(${points.p1},${points.p2})`" id="uid47"
            d="M-20,0L20,0M0,-20L0,20" etype="path" style="display: none;"></path>
      <circle etype="circle" cx="0" cy="0" r="10" fill="#00b368" fill-opacity="0.05"
              :transform="`translate(${points.p1},${points.p2})`"></circle>
    </g>
  </g>
</template>

<script setup lang="ts">
import {useWallsStore} from '../../store'
import {computed} from 'vue'

const wallsStore = useWallsStore()
const storeCoordinates = wallsStore.coordinates
const points = computed(() => {
  return {
    p1: (storeCoordinates.p0[0] + storeCoordinates.p1[0]) / 2,
    p2: (storeCoordinates.p0[1] + storeCoordinates.p1[1]) / 2,
    p3: (storeCoordinates.p2[0] + storeCoordinates.p3[0]) / 2,
    p4: (storeCoordinates.p2[1] + storeCoordinates.p3[1]) / 2,
    p5: (storeCoordinates.p4[0] + storeCoordinates.p5[0]) / 2,
    p6: (storeCoordinates.p4[1] + storeCoordinates.p5[1]) / 2,
    p7: (storeCoordinates.p6[0] + storeCoordinates.p7[0]) / 2,
    p8: (storeCoordinates.p6[1] + storeCoordinates.p7[1]) / 2,
  }
})
</script>

<style scoped>

</style>