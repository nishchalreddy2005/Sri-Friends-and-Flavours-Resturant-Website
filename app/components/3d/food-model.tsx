"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"

export function FoodModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const modelRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Animate on hover
  useFrame((state, delta) => {
    if (!modelRef.current) return

    try {
      modelRef.current.rotation.y += delta * 0.3

      if (hovered) {
        modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 + position[1]
      }
    } catch (error) {
      console.error("Error in food model animation:", error)
    }
  })

  // Create a simple food model using Three.js geometries instead of loading external models
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        ref={modelRef}
        position={position}
        scale={scale}
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Main food item - a stylized dish */}
        <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
          <cylinderGeometry args={[1, 1.2, 0.4, 32]} />
          <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Food topping 1 */}
        <mesh castShadow position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#FF6347" roughness={0.6} metalness={0.1} />
        </mesh>

        {/* Food topping 2 */}
        <mesh castShadow position={[0.4, 0.6, 0.4]}>
          <boxGeometry args={[0.2, 0.1, 0.2]} />
          <meshStandardMaterial color="#00AA00" roughness={0.8} metalness={0.1} />
        </mesh>

        {/* Food topping 3 */}
        <mesh castShadow position={[-0.4, 0.6, 0.3]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FF0000" roughness={0.7} metalness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

