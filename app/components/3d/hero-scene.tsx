"use client"

import { Suspense, useEffect, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text } from "@react-three/drei"
import { FoodModel } from "./food-model"
import { PlateModel } from "./plate-model"

export function HeroScene() {
  // Add state to track if component is mounted (client-side)
  const [isMounted, setIsMounted] = useState(false)
  const canvasRef = useRef(null)

  // Only render on client-side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="absolute inset-0 z-0 bg-gradient-to-b from-amber-100 to-amber-200"></div>
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows ref={canvasRef}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={40} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <directionalLight position={[-10, 10, 5]} intensity={1} castShadow />

          {/* Environment */}
          <Environment preset="sunset" />

          {/* 3D Models */}
          <group position={[0, -1, 0]}>
            <PlateModel position={[0, -0.5, 0]} scale={1.5} />
            <FoodModel position={[0, 0.5, 0]} scale={2} />

            {/* Floating text */}
            <FloatingText position={[0, 3, 0]} />
          </group>

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

function FloatingText({ position }) {
  return (
    <group position={position}>
      <Text fontSize={1} color="#FFD700" position={[0, 0, 0]} anchorX="center" anchorY="middle">
        CULINARY EXCELLENCE
      </Text>
    </group>
  )
}

