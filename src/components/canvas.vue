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
const firstClippedCoordinated = ref()


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
  firstClippedCoordinated.value = null
}

const mouseMoveHandler = (e) => {
  if (clipped.value) {
    if (!firstClippedCoordinated.value) {
      firstClippedCoordinated.value = {
        x: e.x,
        y: e.y
      }
    }
      console.log(firstClippedCoordinated.value.x, e.x)
    translate3d.x += (e.x - firstClippedCoordinated.value.x) / 10
    translate3d.y += (e.y - firstClippedCoordinated.value.y) / 10
  }
}

const clearTimeoutValue = ref()

const zoomHandler = (wheelDelta) => {
  if (scale.value + wheelDelta / 1000 >= 0.3 && scale.value + wheelDelta / 1000 <= 5) {
    scale.value += wheelDelta / 1000
    translate3d.x += -wheelDelta * 4
    translate3d.y += -wheelDelta * 4
    sizes.width += wheelDelta * 10
    sizes.height += wheelDelta * 10
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
onMounted(() => {
})


// WATCH
watch(isWheelPage, () => {
  console.log(isWheelPage.value)
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
