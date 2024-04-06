<template>
  <g
    etype="wall"
    @mousemove="mouseHoverHandler"
    @mouseout="mouseBlurHandler"
    @click="clickHandler"
  >
    <path
      class="wallSelector"
      :fill="color"
      stroke-linecap="square"
      stroke="#5f6975"
      stroke-width="0"
      stroke-opacity="1"
      :d="props.coordinate"
      etype="path"
      opacity="1"
    ></path>
    <path
      fill="red"
      id="uid23"
      d="M5.099999999999999,0.10000000000002274L504.9,0.09999999999999964"
      etype="path"
    ></path>
    <path
      stroke-linecap="square"
      cursor="move"
      stroke="#5f6975"
      stroke-opacity="0.01"
      opacity="0"
      id="uid24"
      :d="props.coordinate"
      etype="path"
      @mousedown.stop="mouseDownHandler"
    ></path>
  </g>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {useMouseStore} from '../../store'
import {useMouseUp} from '../../composables/useMouse'

const props = defineProps({
  coordinate: {
    type: String,
    required: true,
    default: 1
  }
})
const emit = defineEmits(['update-positions', 'start-update-positions', 'stop-update-positions'])

const clipped = ref(false)
const mouseMoveStore = useMouseStore()
const color = ref('#5f6975')
const clicked = ref(false)

const mouseDownHandler = () => {
  clipped.value = true
  emit('start-update-positions')
}
const mouseUpHandler = () => {
  clipped.value = false
  emit('stop-update-positions')
}
const mouseMoveHandler = () => {
  if (clipped.value) {
    emit('update-positions', {
      x: mouseMoveStore.mouseMove.x,
      y: mouseMoveStore.mouseMove.y,
    })
  }
}
const clickHandler = () => {
  clicked.value = true
}
const mouseHoverHandler = () => {
  color.value = '#00b368'
}
const mouseBlurHandler = () => {
  if (clicked.value) {
    return
  }
  color.value = '#5f6975'
}

useMouseUp(mouseUpHandler)


watch(mouseMoveStore, () => {
  mouseMoveHandler()
})
</script>

<style scoped>
</style>