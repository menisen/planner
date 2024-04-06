<template>
  <g etype="Floor" puid="p1">
    <g etype="Ground" style=""></g>
    <g etype="Path" style=""></g>
    <g etype="BgRooms" style="">
      <polygon fill="url(#uid21)" id="uid20" :points="coordinates" etype="polygon"
               transform="translate(3750,3750)" fill-opacity="1" cursor="move"></polygon>
    </g>
    <RoomsBlock/>
    <g etype="Partitions" style=""></g>
    <g etype="NsPreview" style=""></g>
    <g etype="NsShadows0" style="display: none;"></g>
    <g etype="Ns0" style="">
    </g>
    <g etype="NsShadows1" style="display: none;"></g>
    <g etype="Ns1" style="">
    </g>
    <g etype="NsShadows2" style="display: none;"></g>
    <g etype="Ns2" style=""></g>
    <g etype="NsShadows3" style="display: none;"></g>
    <g etype="Ns3" style=""></g>
    <g etype="NsShadows4" style="display: none;"></g>
    <g etype="Ns4" style=""></g>
    <g etype="NsShadows5" style="display: none;"></g>
    <g etype="Ns5" style=""></g>
    <g etype="Rulers" style=""></g>
    <g etype="FreeRoom" style=""></g>
    <g etype="Camera" style="display: none;"></g>
    <g etype="Notice" style=""></g>
  </g>
</template>

<script setup lang="ts">
import RoomsBlock from './rooms.vue'
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
    ${p1}, ${p2}
    ${p3}, ${p4}
    ${p5}, ${p6}
    ${p7}, ${p8}
    ${p1}, ${p2}
  `
})
</script>

<style scoped>
</style>
