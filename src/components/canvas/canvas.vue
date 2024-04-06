<template>
  <div class="workArea">
    <div
      class="canvas"
      :style="canvasStyle"
      @mousedown="mouseDownHandler"
      @mouseup="mouseUpHandler"
      @mousemove="mouseMoveHandler"
      @wheel.prevent="wheelHandler"
    >
      <SvgView
        :scale="isWheelPage ? 1 : scale"
      />
    </div>
  </div>

</template>

<script setup lang="ts">
import SvgView from './svgView.vue'
import {computed, onMounted, reactive, ref, watch} from 'vue'
import {useMouse, useMouseUp } from '../../composables/useMouse'
import {useMouseStore, useControlsStore} from '../../store'

// CONST
const bgColor = ref('rgb(235, 216, 194)')
const sizes = reactive({
  width: 7470,
  height: 7470
})
const transformOrigin = reactive({
  x: 0,
  y: 0
})
const translate3d = reactive({
  x: -3500,
  y: -3500,
  z: 0
})
const scale = ref(1)
const isWheelPage = ref(false)
const clipped = ref(false)
const lastClippedCoordinated = ref()
const displaySize = reactive({
  width: 0,
  height: 0
})
const { mouseMove } = useMouse()
const mouseStore = useMouseStore()
const controlsStore = useControlsStore()


// COMPUTED
const transformOriginSize = computed(() => `${transformOrigin.x}% ${transformOrigin.y}%`)
const transform = computed(() => {
  // return `translate3d(${translate3d.value.x}px, ${translate3d.value.y}px, ${translate3d.value.z}px) ${isWheelPage.value ? scale(${scale.value}px) }`
})
const canvasStyle = computed(() => {
  return {
    width: (isWheelPage.value ? 8000 : sizes.width) + 'px',
    height: (isWheelPage.value ? 8000 : sizes.height) + 'px',
    backgroundColor: bgColor,
    transformOrigin: transformOriginSize.value,
    transform: `translate3d(${translate3d.x}px, ${translate3d.y}px, ${translate3d.z}px) ${isWheelPage.value ? 'scale(' + scale.value + ')': '' }`,
    willChange: isWheelPage.value ? 'transform' : 'auto',
  }
})

// METHODS
const mouseDownHandler = () => {
  clipped.value = true
}

const mouseUpHandler = () => {
  clipped.value = false
  lastClippedCoordinated.value = null
}

const mouseMoveHandler = () => {
  mouseStore.setPosition(mouseMove)
  if (clipped.value) {
    if (!lastClippedCoordinated.value) {
      lastClippedCoordinated.value = {
        x: mouseMove.value.x,
        y: mouseMove.value.y
      }
    }
    // console.log(translate3d.x + e.x - lastClippedCoordinated.value.x)
    // if (translate3d.x + e.x - lastClippedCoordinated.value.x < -1400 || translate3d.y + e.y - lastClippedCoordinated.value.y < -1400) {
    //   return
    // }
    translate3d.x += mouseMove.value.x - lastClippedCoordinated.value.x
    translate3d.y += mouseMove.value.y - lastClippedCoordinated.value.y
    lastClippedCoordinated.value = {
      x: mouseMove.value.x,
      y: mouseMove.value.y
    }
  }
}

const clearTimeoutValue = ref()

const zoomHandler = (wheelDelta) => {
  if (scale.value + wheelDelta / 1000 >= 0.3 && scale.value + wheelDelta / 1000 <= 5) {
    scale.value += wheelDelta / 1000
    translate3d.x += -wheelDelta * 4
    translate3d.y += -wheelDelta * 4
    if (sizes.width + wheelDelta * 10 > displaySize.width + 1000) {
      sizes.width += wheelDelta * 10
    }
    if (sizes.height + wheelDelta * 10 > displaySize.height + 1000) {
      sizes.height += wheelDelta * 10
    }
  }
}

const wheelHandler = (e) => {
  isWheelPage.value = true
  zoomHandler(e.wheelDeltaY)
  if (clearTimeoutValue.value) {
    clearTimeout(clearTimeoutValue.value)
  }
  clearTimeoutValue.value = setTimeout(() => {
    isWheelPage.value = false
  }, 500)
}

// ONMOUNTED
useMouseUp(mouseUpHandler)
onMounted(() => {
  displaySize.width = window.outerWidth
  displaySize.height = window.outerHeight
})


// WATCH
watch(translate3d, () => {
  if (translate3d.x >= 0) {
    translate3d.x = 0
  }
  if (translate3d.y >= 0) {
    translate3d.y = 0
  }
  // if (!isWheelPage.value) {
  //   if (Math.abs(translate3d.x) + 1000 >= sizes.width) {
  //     translate3d.x = sizes.width
  //   }
  //   if (Math.abs(translate3d.y) + 1000 >= sizes.height) {
  //     translate3d.y = sizes.height
  //   }
  // }
})
watch(mouseMove, () => {
  mouseMoveHandler()
})
</script>

<style scoped>
.workArea {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  -ms-touch-action: none;
  touch-action: none;
}
</style>
