"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 90;
const CONNECTION_DIST = 1.6;

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return { positions: pos, velocities: vel };
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const c1 = new THREE.Color("#53F3C3");
    const c2 = new THREE.Color("#7C5CFF");
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = i / Math.max(1, PARTICLE_COUNT - 1);
      const c = c1.clone().lerp(c2, t);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return col;
  }, []);

  const linePositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6),
    []
  );

  useFrame(({ pointer }) => {
    mouseRef.current.set(pointer.x * viewport.width * 0.5, pointer.y * viewport.height * 0.5);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
      positions[ix] += velocities[ix];
      positions[iy] += velocities[iy];
      positions[iz] += velocities[iz];

      if (Math.abs(positions[ix]) > 2.8) velocities[ix] *= -1;
      if (Math.abs(positions[iy]) > 2.2) velocities[iy] *= -1;
      if (Math.abs(positions[iz]) > 1.2) velocities[iz] *= -1;

      const dx = mouseRef.current.x - positions[ix];
      const dy = mouseRef.current.y - positions[iy];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1.5) {
        positions[ix] += dx * 0.002;
        positions[iy] += dy * 0.002;
      }
    }

    if (pointsRef.current) {
      (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }

    let lineIdx = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < CONNECTION_DIST) {
          linePositions[lineIdx++] = positions[i * 3];
          linePositions[lineIdx++] = positions[i * 3 + 1];
          linePositions[lineIdx++] = positions[i * 3 + 2];
          linePositions[lineIdx++] = positions[j * 3];
          linePositions[lineIdx++] = positions[j * 3 + 1];
          linePositions[lineIdx++] = positions[j * 3 + 2];
        }
      }
    }

    if (linesRef.current) {
      const geo = linesRef.current.geometry;
      const attr = geo.attributes.position as THREE.BufferAttribute;
      attr.needsUpdate = true;
      geo.setDrawRange(0, lineIdx / 3);
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} vertexColors transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#53F3C3" transparent opacity={0.12} />
      </lineSegments>
    </>
  );
}

export function SkillsField3D() {
  return (
    <div className="panel" style={{ height: 340 }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
