'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { TextureLoader, type Group } from 'three'

const LOGO_URL = '/logo.jpg'

function RecoveryLogo() {
  const group = useRef<Group>(null)
  const texture = useLoader(TextureLoader, LOGO_URL)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.42 + tilt.x
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.55) * 0.08 + tilt.y
  })

  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.45}>
      <group ref={group}>
        <mesh onPointerMove={(event) => setTilt({ x: event.point.x * 0.28, y: -event.point.y * 0.18 })} onPointerOut={() => setTilt({ x: 0, y: 0 })}>
          <boxGeometry args={[2.65, 2.65, 0.12]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.24} metalness={0.25} />
        </mesh>
        <mesh position={[0, 0, 0.08]} rotation={[0, 0, 0]}>
          <planeGeometry args={[2.42, 2.42]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} />
        </mesh>
      </group>
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
          <Suspense fallback={null}>
            <RecoveryLogo />
          </Suspense>
          <Sparkles count={30} scale={5.5} size={1.5} speed={0.2} color="#d9f99d" />
        </Canvas>
      ) : (
        <div className="relative flex min-h-[22rem] items-center justify-center p-8 text-center [perspective:1000px]">
          <div className="group/logo relative transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(18deg)_rotateX(-8deg)]">
            <div className="absolute -inset-8 rounded-full bg-teal-300/20 blur-2xl" />
            <img src={LOGO_URL} alt="Ottawa County Recovery Alliance" className="relative h-48 w-48 animate-logo-spin rounded-3xl object-cover border-8 border-white/80 shadow-2xl" />
          </div>
          <span className="sr-only">Ottawa County Recovery Alliance logo, rotating gently as an interactive decorative element.</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-teal-100/70">
        <span>Connected care</span>
        <span>{canRender3D ? 'Interactive field' : 'Accessible view'}</span>
      </div>
    </div>
  )
}
