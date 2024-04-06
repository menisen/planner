import { defineStore } from 'pinia'

export const useWallsStore = defineStore('walls', {
  state: () => ({
    coordinates: {
      p0: [-5, -5], // top
      p1: [5, 5], // top
      p2: [505, 5], // right
      p3: [515, -5], // right
      p4: [515, 515], // bottom
      p5: [505, 505], // bottom
      p6: [5, 505], // left
      p7: [-5, 515], // left
    },
  }),
  getters: {
    coordinatePositions: (state) => {
      // const res = []
      // for (let i = 0; i < 4; i++) {
      //   for (let j = 0; j < 4; j++) {
      //     res[i] = {}
      //     res[i][j] = state.coordinates[`p${(i * 2 + j) % 8}`]
      //   }
      // }
      // return res
      return [
        {
          p1: state.coordinates.p0,
          p2: state.coordinates.p1,
          p3: state.coordinates.p2,
          p4: state.coordinates.p3,
        },
        {
          p1: state.coordinates.p2,
          p2: state.coordinates.p3,
          p3: state.coordinates.p4,
          p4: state.coordinates.p5,
        },
        {
          p1: state.coordinates.p4,
          p2: state.coordinates.p5,
          p3: state.coordinates.p6,
          p4: state.coordinates.p7,
        },
        {
          p1: state.coordinates.p6,
          p2: state.coordinates.p7,
          p3: state.coordinates.p0,
          p4: state.coordinates.p1,
        }
      ]
    },
  },
  actions: {
    setCoordinatePosition (index, key, value) {
      console.log(index, key, value)
      this.coordinates[index][key] += value
    }
  }
})