<template>
  <svg version="1.1" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"
       style="overflow-x: hidden; overflow-y: hidden;">
    <g etype="TPaper" :transform="`translate(-0.5, -0.5)scale(${props.scale})`">
      <rect fill="#EBD8C2" id="uid5" etype="rect" x="0" y="0" width="8000" height="8000"></rect>
      <g etype="Image"></g>


      <FloorsBlock />


      <path helper="helperLine" stroke="rgba(255, 255, 255, 1)" stroke-width="3" id="uid10" d="M0,0L0,0"
            etype="path"></path>
      <path helper="helperLine" stroke="#00b368" stroke-width="1" id="uid11" d="M0,0L0,0" etype="path"></path>
      <path etype="path" stroke="#00b368" stroke-width="1" fill="#00b368" fill-opacity="0.2" opacity="0.7"
            id="uid12" d="M0,0L0,0"></path>
      <path etype="path" stroke="#00b368" stroke-width="1" fill="#00b368" fill-opacity="0.2" opacity="0.7"
            id="uid13" d="M0,0L0,0"></path>
      <text etype="text" text-rendering="optimizeSpeed" font-size="11" fill="#ffffff">
        <textPath xlink:href="#uid13">
          <tspan></tspan>
        </textPath>
      </text>
      <path etype="path" stroke="#00b368" stroke-width="1" fill="#00b368" fill-opacity="0.2" opacity="0.7"
            id="uid14" d="M0,0L0,0"></path>
      <g etype="SingleWallDimension"></g>
      <g etype="RoomDimension"></g>
      <g etype="NeighbourDimensionsGroup"></g>
    </g>
    <defs etype="TPatterns">
      <marker id="uid1" markerUnits="userSpaceOnUse" orient="auto" viewBox="0 0 7 8" markerWidth="7"
              markerHeight="8" refX="-0.5" refY="5">
        <path fill="#ffffff" id="uid2" d="M7,2L0,5L7,8" etype="path"></path>
      </marker>
      <marker id="uid3" markerUnits="userSpaceOnUse" orient="auto" viewBox="0 0 10 8" markerWidth="10"
              markerHeight="8" refX="10" refY="5">
        <path fill="#ffffff" id="uid4" d="M3,2L10,5L3,8" etype="path"></path>
      </marker>
      <pattern id="uid6" patternUnits="userSpaceOnUse" x="0" y="0" spreadMethod="pad" width="100" height="100">
        <path fill="none" stroke="#eee" stroke-width="1" id="uid7"
              d="M10,0L10,100M20,0L20,100M30,0L30,100M40,0L40,100M60,0L60,100M70,0L70,100M80,0L80,100M90,0L90,100M0,10L100,10M0,20L100,20M0,30L100,30M0,40L100,40M0,60L100,60M0,70L100,70M0,80L100,80M0,90L100,90"
              etype="path"></path>
        <path fill="none" stroke="#bbb" stroke-width="1" id="uid8" d="M50,0L50,100M0,50L100,50" etype="path"></path>
        <path fill="none" stroke="#111" stroke-width="1" id="uid9" d="M0,0L0,100L100,100" etype="path"></path>
      </pattern>
      <marker id="uid15" markerUnits="userSpaceOnUse" orient="auto" viewBox="0 0 4 7" markerWidth="4"
              markerHeight="7" refX="4" refY="3.5">
        <path fill="black" id="uid16" d="M2.18557e-07 7L4 3.5L0 2.44784e-07L2.18557e-07 7Z" etype="path"></path>
      </marker>
      <marker id="uid17" markerUnits="userSpaceOnUse" orient="auto" viewBox="0 0 4 7" markerWidth="4"
              markerHeight="7" refX="0.00001" refY="3.5">
        <path fill="black" id="uid18" d="M4 7L-1.09278e-07 3.5L4 2.44784e-07L4 7Z" etype="path"></path>
      </marker>
    </defs>
    <defs etype="TGradients"></defs>
    <defs etype="TFilters">
      <filter id="uid0">
        <feGaussianBlur stdDeviation="5"></feGaussianBlur>
      </filter>
      <filter id="uid19" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import FloorsBlock from './floors.vue'
const props = defineProps({
  scale: {
    type: Number,
    required: true,
    default: 1
  }
})
</script>

<style scoped>
</style>
