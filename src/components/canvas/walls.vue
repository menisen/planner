<template>
  <g etype="walls">
    <WallBlock
      v-for="(coordinate, index) in coordinates"
      :key="index"
      :puid="`p${3 * (index + 1)}`"
      :id="`wall-${index + 1}`"
      :coordinate="coordinate"
      @update-positions="updatePositions($event, index)"
      @start-update-positions="startUpdatePositions"
      @stop-update-positions="stopUpdatePositions"
    />
  </g>
</template>

<script setup lang="ts">
import WallBlock from './wall.vue'
import {computed, ref} from 'vue'
import {useWallsStore} from '../../store'

const lastClippedCoordinated = ref()
const moveDirection = ref(0) // 1 - x(right -left), 2 - y(up-down), 0 - not
const wallsStore = useWallsStore()
const coordinatePositions = wallsStore.coordinatePositions


const coordinates = computed(() => {
  return coordinatePositions.map((e) => {
    return `M${e.p1[0]}, ${e.p1[1]} ${e.p2[0]}, ${e.p2[1]} ${e.p3[0]}, ${e.p3[1]} ${e.p4[0]}, ${e.p4[1]} ${e.p1[0]}, ${e.p1[1]} `
  })
})


const updatePositions = (positions, index) => {
  if (!moveDirection.value && lastClippedCoordinated.value) {
    if (Math.abs(lastClippedCoordinated.value?.x - positions.x) > Math.abs(lastClippedCoordinated.value?.y - positions.y)) {
      moveDirection.value = 1
    } else {
      moveDirection.value = 2
    }
  }
  if (!lastClippedCoordinated.value) {
    lastClippedCoordinated.value = {
      x: positions.x,
      y: positions.y
    }
  }
  // console.log(moveDirection.value)
  for (let i = 0; i < 4; i++) {
    wallsStore.setCoordinatePosition(`p${(index * 2 + i) % 8}`, moveDirection.value ? moveDirection.value - 1 : 0, positions[moveDirection.value === 2 ? 'y' : 'x'] - lastClippedCoordinated.value[moveDirection.value === 2 ? 'y' : 'x'])
  }

  lastClippedCoordinated.value = {
    x: positions.x,
    y: positions.y
  }
}
const startUpdatePositions = () => {
  lastClippedCoordinated.value = null
}
const stopUpdatePositions = () => {
  lastClippedCoordinated.value = null
  moveDirection.value = 0
}
</script>

<style scoped>

</style>