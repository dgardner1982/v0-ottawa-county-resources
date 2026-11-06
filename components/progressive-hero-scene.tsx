'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import type { Mesh } from 'three'

function RecoveryOrbit() {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.18
    mesh.current.rotation.y = state.clock.elapsedTime * 0.24
  })

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh} rotation-z={0.35} scale={1.6}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial color="#35e15c" roughness={0.2} metalness={0.55} distort={0.28} speed={1.5} />
      </mesh>
    </Float>
  )
}

export function ProgressiveHeroScene() {
  const [isReady, setIsReady] = useState(false)
  const [canRender3D, setCanRender3D] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)')
    const supportsCanvas = document.createElement('canvas').getContext('webgl') !== null
    setCanRender3D(media.matches && supportsCanvas)
    setIsReady(true)
  }, [])

  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-900/80" aria-label="Decorative 3D recovery network visualization">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(53,225,92,0.22),transparent_26%),radial-gradient(circle_at_75%_20%,rgba(45,212,191,0.2),transparent_34%)]" />
      {isReady && canRender3D ? (
        <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={1.4} />
          <directionalLight position={[3, 4, 4]} intensity={2.5} color="#9fffb2" />
          <pointLight position={[-3, -2, 2]} intensity={8} color="#14b8a6" />
          <RecoveryOrbit />
          <Sparkles count={55} scale={5.5} size={2.2} speed={0.3} color="#d9f99d" />
        </Canvas>
      ) : (
        <div className="relative flex min-h-[22rem] items-center justify-center p-8 text-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-teal-200/40 bg-teal-300/10 shadow-[0_0_70px_-18px_rgba(53,225,92,0.9)]">
            <div className="h-24 w-24 rounded-full border border-lime-200/40 bg-lime-200/20 shadow-[0_0_36px_-8px_rgba(217,249,157,0.9)]" />
          </div>
          <span className="sr-only">A calm, layered visual representing connected recovery resources.</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-teal-100/70">
        <span>Connected care</span>
        <span>{canRender3D ? 'Interactive field' : 'Accessible view'}</span>
      </div>
    </div>
  )
}
