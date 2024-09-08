import { OrbitControls } from '@react-three/drei'
import React from 'react'

function Experience() {
  return (
    <React.Fragment>
        <OrbitControls/>
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial/>
    </mesh>
    </React.Fragment>
  )
}

export default Experience
