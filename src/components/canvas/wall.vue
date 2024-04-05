<template>
  <g etype="wall">
    <path
      fill="#5f6975"
      stroke-linecap="square"
      stroke="#5f6975"
      stroke-width="0"
      stroke-opacity="1"
      :d="props.coordinate"
      etype="path"
      opacity="1"
    ></path>
<!--    <path fill="red" id="uid23" d="M5.099999999999999,0.10000000000002274L504.9,0.09999999999999964"-->
<!--          etype="path"></path>-->
<!--    <path class="wallSelector" stroke-linecap="square" cursor="move" stroke="#5f6975"-->
<!--          stroke-opacity="0.01" opacity="0" id="uid24"-->
<!--          d="M-5,-5 5.1,5.100000000000023 504.9,5.1 515,-5 -5,-5 " etype="path"></path>-->
  </g>
</template>

<script setup lang="ts">
const props = defineProps({
  coordinate: {
    type: String,
    required: true,
    default: 1
  }
})
</script>

<style scoped>

</style>