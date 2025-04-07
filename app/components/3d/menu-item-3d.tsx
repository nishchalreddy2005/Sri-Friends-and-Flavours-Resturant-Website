"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { useSpring, animated } from "@react-spring/three"
import { Environment, ContactShadows } from "@react-three/drei"
import { motion } from "framer-motion"

function Dish({ position, color, name }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  // Animation for hover effect
  const { scale, rotation } = useSpring({
    scale: hovered ? 1.2 : 1,
    rotation: hovered ? [0, Math.PI / 4, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  })

  return (
    <animated.group
      ref={ref}
      position={position}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Plate */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.2} />
      </mesh>

      {/* Food */}
      <mesh position={[0, 0.3, 0]} receiveShadow castShadow>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Garnish */}
      <mesh position={[0.5, 0.4, 0.5]} receiveShadow castShadow>
        <boxGeometry args={[0.2, 0.1, 0.2]} />
        <meshStandardMaterial color="#00AA00" roughness={0.8} metalness={0.1} />
      </mesh>
    </animated.group>
  )
}

export function MenuItem3D({ name, color = "#FF6347" }) {
  const [isMounted, setIsMounted] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="h-48 w-full rounded-lg bg-gray-100 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    )
  }

  return (
    <motion.div
      className="h-48 w-full rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Canvas shadows dpr={[1, 2]} ref={canvasRef}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        <Dish position={[0, 0, 0]} color={color} name={name} />

        <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={5} blur={2} far={4} />

        <Environment preset="sunset" />
      </Canvas>
    </motion.div>
  )
}

