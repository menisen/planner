import { defineStore } from 'pinia'

export const useControlsStore = defineStore('controls', {
  state: () => ({
    scale: 1,
    startPosition: {
      x: -3500,
      y: -3500,
      z: 0
    },
    transformOrigin: {
      x: 0,
      y: 0
    },
    displaySize: {
      width: 0,
      height: 0
    },
    sizes: {
      width: 7470,
      height: 7470
    }
  }),
  actions: {
    setState: (key, value) => ({
      // this[key] = value
    })
  }
})