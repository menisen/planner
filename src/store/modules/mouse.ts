import { defineStore } from 'pinia'

export const useMouseStore = defineStore('mousemove', {
  state: () => ({
    mouseMove: {}
  }),
  actions: {
    setPosition (positions) {
      this.mouseMove = positions
    }
  }
})