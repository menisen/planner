<template>
  <div id="canvas3d" class="canvas3d"></div>
</template>

<script setup lang="ts">
import { World } from './World.js'
import {onMounted} from 'vue'

onMounted(() => {
  const container = document.querySelector('#canvas3d')
  const world = new World(container)
  world.start()
})
</script>

<style scoped>

</style>