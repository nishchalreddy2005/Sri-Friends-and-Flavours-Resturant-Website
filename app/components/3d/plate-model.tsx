"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"

export function PlateModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const modelRef = useRef()

  // Simple rotation animation
  useFrame((state, delta) => {
    if (!modelRef.current) return

    try {
      modelRef.current.rotation.y += delta * 0.2
    } catch (error) {
      console.error("Error in plate model animation:", error)
    }
  })

  // Create a simple plate model using Three.js geometries
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={modelRef} position={position} scale={scale} rotation={rotation}>
        <mesh receiveShadow castShadow>
          <cylinderGeometry args={[2, 2, 0.2, 32]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0.15, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[1.8, 1.8, 0.1, 32]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.3} metalness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

