import {onMounted, onUnmounted, ref} from 'vue'

export function useMouse() {
  const mouseMove = ref({
    x: 0,
    y: 0
  })

  const update = (event) => {
    mouseMove.value.x = event.pageX
    mouseMove.value.y = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return {mouseMove}
}
export function useMouseUp(func) {
  onMounted(() => window.addEventListener('mouseup', func))
  onUnmounted(() => window.removeEventListener('mouseup', func))
}