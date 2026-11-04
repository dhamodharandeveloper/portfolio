import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AdditiveBlending } from 'three'

const MIN_DPR = 1
const MAX_DPR = 1.5
const TARGET_FPS = 90

// Keeps the scene at the smoothest frame rate the device can sustain. It
// samples frames in ~1.2s windows and nudges the renderer pixel ratio between
// MIN_DPR and MAX_DPR, so high-refresh displays can hold 90 fps while slower
// GPUs (or 60 Hz panels) settle instead of dropping frames.
function FrameGovernor({ min = MIN_DPR, max = MAX_DPR, target = TARGET_FPS }) {
  const setDpr = useThree((state) => state.setDpr)
  const gl = useThree((state) => state.gl)
  const sample = useRef({ frames: 0, time: 0, fastest: Infinity })
  // Never render above the display's own pixel ratio, and never below 1x.
  const ceiling = Math.min(max, typeof window === 'undefined' ? max : window.devicePixelRatio || 1)

  useFrame((_, delta) => {
    const stats = sample.current
    if (delta > 0 && delta < stats.fastest) stats.fastest = delta
    stats.frames += 1
    stats.time += delta
    if (stats.time < 1.2) return

    const fps = stats.frames / stats.time
    // Fastest frame observed approximates the panel refresh rate, so a 60 Hz
    // screen is not pushed below 1x trying to reach an impossible 90 fps.
    const refresh = stats.fastest === Infinity ? target : 1 / stats.fastest
    const goal = Math.min(target, Math.max(60, refresh) * 0.97)
    const current = gl.getPixelRatio()

    stats.frames = 0
    stats.time = 0
    stats.fastest = Infinity

    if (fps < goal * 0.9 && current > min) {
      setDpr(Math.max(min, Math.round((current - 0.1) * 100) / 100))
    } else if (fps > goal * 0.99 && current < ceiling) {
      setDpr(Math.min(ceiling, Math.round((current + 0.1) * 100) / 100))
    }
  })

  return null
}

function HoloCore() {
  const tilt = useRef(null)
  const spin = useRef(null)
  const rings = useRef(null)
  const float = useRef(null)

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime
    if (float.current) {
      float.current.position.y = Math.sin(time * 1.35) * 0.12
      float.current.rotation.x = Math.cos(time * 0.7) * 0.035
      float.current.rotation.z = Math.sin(time * 0.9) * 0.045
    }
    if (spin.current) {
      spin.current.rotation.y += delta * 0.2
      spin.current.rotation.x += delta * 0.045
    }
    if (tilt.current) {
      tilt.current.rotation.y += (state.pointer.x * 0.32 - tilt.current.rotation.y) * 0.045
      tilt.current.rotation.x += (-state.pointer.y * 0.24 - tilt.current.rotation.x) * 0.045
    }
    if (rings.current) {
      rings.current.rotation.z -= delta * 0.08
      rings.current.rotation.x = 0.32 + Math.sin(time * 0.2) * 0.08
    }
  })

  return (
    <group ref={tilt}>
      <group ref={float}>
        <group ref={spin}>
          <mesh>
            <icosahedronGeometry args={[1.38, 1]} />
            <meshStandardMaterial
              color="#08172b"
              emissive="#1677ff"
              emissiveIntensity={0.52}
              metalness={0.92}
              roughness={0.22}
              flatShading
            />
          </mesh>
          <mesh scale={1.015}>
            <icosahedronGeometry args={[1.38, 1]} />
            <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.38} />
          </mesh>
          <mesh scale={0.72}>
            <icosahedronGeometry args={[1.38, 0]} />
            <meshBasicMaterial color="#00bfff" wireframe transparent opacity={0.14} />
          </mesh>
          <mesh scale={0.55}>
            <sphereGeometry args={[1, 16, 12]} />
            <meshBasicMaterial
              color="#1677ff"
              transparent
              opacity={0.16}
              blending={AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </group>
      </group>

      <group ref={rings}>
        <mesh rotation={[Math.PI / 2.6, 0.1, 0]}>
          <torusGeometry args={[2.02, 0.007, 8, 96]} />
          <meshBasicMaterial color="#00bfff" transparent opacity={0.62} />
        </mesh>
        <mesh rotation={[Math.PI / 1.9, -0.4, 0.5]}>
          <torusGeometry args={[2.26, 0.005, 8, 96]} />
          <meshBasicMaterial color="#1677ff" transparent opacity={0.42} />
        </mesh>
        <mesh rotation={[Math.PI / 2.2, 0.6, 0.2]}>
          <torusGeometry args={[2.55, 0.004, 8, 96]} />
          <meshBasicMaterial color="#164b83" transparent opacity={0.5} />
        </mesh>
      </group>

      <group>
        <mesh position={[2.02, 0.3, 0]}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshBasicMaterial color="#00e5ff" />
        </mesh>
        <mesh position={[-1.7, -1.05, 0.7]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#258bff" />
        </mesh>
        <mesh position={[0.5, 2.1, -0.4]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshBasicMaterial color="#00bfff" />
        </mesh>
      </group>
    </group>
  )
}

function StarField({ count = 520 }) {
  const ref = useRef(null)

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      const radius = 3.2 + Math.random() * 4.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      values[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      values[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      values[index * 3 + 2] = radius * Math.cos(phi)
    }
    return values
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.018
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#00bfff"
        size={0.024}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  )
}

export default function HeroScene({ active = true, reducedMotion = false }) {
  // React Three Fiber measures its container with a ResizeObserver. When this
  // lazily loaded chunk mounts mid-layout the first measurement can be missed,
  // leaving the canvas at its 300x150 default. Nudging a resize a few times
  // after mount guarantees the renderer picks up the real hero dimensions.
  useEffect(() => {
    const timers = [0, 120, 500].map((delay) =>
      window.setTimeout(() => window.dispatchEvent(new Event('resize')), delay),
    )
    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [])

  const running = active && !reducedMotion

  return (
    <Canvas
      dpr={[MIN_DPR, MAX_DPR]}
      resize={{ offsetSize: true }}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      frameloop={running ? 'always' : 'demand'}
      gl={{
        alpha: true,
        // MSAA is expensive at high pixel ratios; when the canvas already
        // renders above 1.5x the extra samples buy little. Keep it only for
        // low-DPI screens where aliasing is actually visible.
        antialias: (typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1) < 1.5,
        stencil: false,
        depth: true,
        powerPreference: 'high-performance',
      }}
      style={{ background: 'transparent' }}
    >
      <fog attach="fog" args={['#030814', 6.5, 12.5]} />
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 6]} intensity={55} distance={22} decay={2} color="#00bfff" />
      <pointLight position={[-5, -3, -4]} intensity={45} distance={22} decay={2} color="#1677ff" />
      <pointLight position={[0, 0, 3]} intensity={18} distance={12} color="#258bff" />
      <HoloCore />
      <StarField count={reducedMotion ? 180 : 460} />
      {running && <FrameGovernor />}
    </Canvas>
  )
}
