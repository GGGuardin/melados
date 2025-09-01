import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    
  const { nodes, materials } = useGLTF('src/assets/3d/sundae_-_sketchfab_low_poly_challenge_desserts.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02} position={[0, -3, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.972, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Glass_LP_Glass_0.geometry}
              material={materials.Glass}
              position={[-132.862, 0, 0]}
            />
          </group>
          <group position={[0, 149.604, 4.26]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Ice_LP_Ice-Cream_0'].geometry}
              material={materials['Ice-Cream']}
              position={[-132.454, 4.26, -149.947]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GeoSphere003_Caramel_0.geometry}
            material={materials.Caramel}
            position={[61.81, -0.343, -190.963]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('src/assets/3d/sundae_-_sketchfab_low_poly_challenge_desserts.glb')