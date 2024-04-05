import {
  CylinderGeometry,
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
  TextureLoader
} from 'three'

function createCylinder(
  color = ['#C8C8C8', '#492F26', '#434952', '#C8C8C8', '#434952', '#492F26'],
  position = [0, 0, 0],
  meshType = 'standard',
  size = [5, 2, 0.1]
) {
  // create a geometry
  const geometry = new CylinderGeometry(...size).toNonIndexed()
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

  // const edges = new EdgesGeometry( geometry );
  // const line = new LineSegments(edges, new LineBasicMaterial( { color: 0xffffff } ) )

  // create a default (white) Basic material
  const uvTex	= new TextureLoader().load('https://media.istockphoto.com/id/1440280958/photo/grunge-dirty-background.webp?b=1&s=170667a&w=0&k=20&c=_IaBI4UA_-IldG0vwYZ-JTKAmUNADFt4_dg-IT9UZKU=')
  const material = [
    new MeshBasicMaterial( { color: color[0], side: DoubleSide } ),
    new MeshBasicMaterial( {color: 0xffffff, side: DoubleSide, transparent: true, opacity: 0 } ),
    new MeshBasicMaterial( { map: uvTex, side: DoubleSide } ),
    new MeshBasicMaterial( { map: color[1], side: DoubleSide } ),
    new MeshBasicMaterial( { map: color[2], side: DoubleSide } ),
    new MeshBasicMaterial( { map: color[3], side: DoubleSide } ),
    // new MeshBasicMaterial( {color: 0xffffff, side: DoubleSide, transparent: true, opacity: 0 } ),
    // new MeshBasicMaterial( {color: 0xffffff, side: DoubleSide, transparent: true, opacity: 0 } )
  ]

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)
  // cube.add(line)

  //cube.rotation.set(-0.5, -0.1, 0.8)
  cube.position.set(position[0], position[1], position[2])


  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z = delta
  }

  return cube
}

export { createCylinder }
