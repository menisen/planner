import { createCamera } from './components/camera'
import { createLights } from './components/lights'
import { createCube } from './components/objects/index'
import { createScene } from './components/scene'
import { createControls } from './systems/controls'
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'
import { Loop } from './systems/Loop'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene
let loop

class World {
  constructor(container) {
    // Instances of camera, scene, and renderer
    camera = createCamera()
    scene = createScene('rgb(235, 216, 194)')
    renderer = createRenderer()

    // Initializate Loop
    loop = new Loop(camera, scene, renderer)

    container.append(renderer.domElement)

    // Orbit Controls
    const controls = createControls(camera, renderer.domElement)


    console.log(controls.listenToKeyEvents)

    // Cube Instance
    let floor = createCube({
      // color: ['#492F26', '#492F26', '#492F26', '#492F26', '#434952', '#492F26'],
      position: [0, 0, 0],
      meshType: 'basic',
      size: [5.1, 2.1, 0.1],
      image: 'https://static.planner5d.com/textures/prkt_1035.jpg'
    })
    let wall1 = createCube({
      color: ['#492F26', '#434952', '#492F26', '#C8C8C8', '#434952', '#492F26'],
      position: [0, 1, .5],
      meshType: 'basic',
      size: [5.1, 0.1, 1],
      image: 'https://static.planner5d.com/textures/bricks_1005.jpg'
    })
    let wall2 = createCube({
      color: ['#492F26', '#434952', '#492F26', '#C8C8C8', '#434952', '#492F26'],
      position: [0, -1, .5],
      meshType: 'basic',
      size: [5.1, 0.1, 1],
      image: 'https://static.planner5d.com/textures/bricks_1005.jpg'
    })
    let wall3 = createCube({
      color: ['#492F26', '#434952', '#492F26', '#C8C8C8', '#434952', '#492F26'],
      position: [2.5, 0, .5],
      meshType: 'basic',
      size: [2, 0.1, 1],
      image: 'https://static.planner5d.com/textures/bricks_1005.jpg'
    })
    let wall4 = createCube({
      color: ['#492F26', '#434952', '#492F26', '#C8C8C8', '#434952', '#492F26'],
      position: [-2.5, 0, .5],
      meshType: 'basic',
      size: [2, 0.1, 1],
      image: 'https://static.planner5d.com/textures/bricks_1005.jpg'
    })
    // let wall = createCylinder(['#492F26', '#434952', '#492F26', '#C8C8C8', '#434952', '#492F26'], [0, 0, 0], 'basic', [5, 5, 2, 4, 1])
    wall2.tick(Math.PI)
    wall3.tick(-Math.PI / 2)
    wall4.tick(Math.PI / 2)

    // Light Instance, with optional light helper
    const { light, lightHelper } = createLights('white')

    loop.updatables.push(controls)
    // loop.updatables.push(floor)
    loop.updatables.push(light)

    scene.add(light, floor)
    scene.add(light, wall1)
    scene.add(light, wall2)
    scene.add(light, wall3)
    scene.add(light, wall4)
    // scene.add(light, wall)



    // Responsive handler
    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera)
  }

  // Animation handlers
  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }
