import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
  Color,
  Float32BufferAttribute,
  EdgesGeometry,
  LineSegments,
  LineBasicMaterial,
  DoubleSide,
  TextureLoader,
  RepeatWrapping
} from 'three'

function createCube({
    color = ['#C8C8C8', '#492F26', '#434952', '#C8C8C8', '#434952', '#492F26'],
    position = [0, 0, 0],
    meshType = 'standard',
    size = [5, 2, 0.1],
    rotation = [0, 0, 0],
    image
  }) {
  // create a geometry
  const geometry = new BoxGeometry(...size).toNonIndexed()
  const positionAttribute = geometry.getAttribute('position')
  const colors = []
  const newColor = new Color()

  for (let i = 0; i < positionAttribute.count / 6; i ++) {

    newColor.setHex(`0x${color[i]?.slice(1)}`)

    colors.push(newColor.r, newColor.g, newColor.b)
    colors.push(newColor.r, newColor.g, newColor.b)
    colors.push(newColor.r, newColor.g, newColor.b)

    colors.push(newColor.r, newColor.g, newColor.b)
    colors.push(newColor.r, newColor.g, newColor.b)
    colors.push(newColor.r, newColor.g, newColor.b)
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))

  const edges = new EdgesGeometry( geometry );
  const line = new LineSegments(edges, new LineBasicMaterial( { color: 0xffffff } ) )

  const map	= new TextureLoader().load(image)

  // create a default (white) Basic material
  let material
  const materialOptions = {}
  if (colors) {
    materialOptions.colors = colors
  }
  if (image) {
    materialOptions.map = map
  }
  materialOptions.vertexColors = true
  console.log(materialOptions)


  switch (meshType) {
    case 'standard':
      material = new MeshStandardMaterial({
        color,
        vertexColors: true
      })
      break
    case 'basic':
      material = new MeshBasicMaterial(materialOptions)
      break
  }

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)
  // cube.add(line)

  cube.rotation.set(...rotation)
  cube.position.set(position[0], position[1], position[2])


  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z = delta
  }

  return cube
}

export { createCube }
