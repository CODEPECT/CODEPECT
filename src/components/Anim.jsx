/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 anim.gltf 
Author: Ale Segura (https://sketchfab.com/al_sebu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wave-particles-27528a65990c412eae734d5f4b14da04
Title: Wave Particles
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/anim.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Empty_0" scale={[1.5, 1.2, 1.2]} />
              <group name="DELETE_THIS_ANIMATION_1">
                <mesh name="mesh_0" geometry={nodes.mesh_0.geometry} material={materials.Particles} morphTargetDictionary={nodes.mesh_0.morphTargetDictionary} morphTargetInfluences={nodes.mesh_0.morphTargetInfluences} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/anim.gltf')
