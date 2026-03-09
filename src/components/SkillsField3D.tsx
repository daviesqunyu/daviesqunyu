"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

function PointsCloud({ count = 140 }: { count?: number }) {
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = new THREE.Color("#53F3C3");
    const c2 = new THREE.Color("#7C5CFF");
    for (let i = 0; i < count; i++) {
      const r = 1.6 + Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos[i * 3 + 0] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      const t = i / Math.max(1, count - 1);
      const c = c1.clone().lerp(c2, t);
      col[i * 3 + 0] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.95} />
    </points>
  );
}

function Core() {
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ffffff"),
        roughness: 0.25,
        metalness: 0.6,
        emissive: new THREE.Color("#0b0f16"),
        emissiveIntensity: 0.45
      }),
    []
  );
  return (
    <Float speed={1.05} rotationIntensity={0.4} floatIntensity={0.55}>
      <mesh material={material}>
        <dodecahedronGeometry args={[0.75, 1]} />
      </mesh>
    </Float>
  );
}

export function SkillsField3D() {
  return (
    <div className="panel" style={{ height: 340 }}>
      <Canvas camera={{ position: [0, 0, 4.1], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 2]} intensity={0.9} color="#53F3C3" />
        <directionalLight position={[-4, -2, 3]} intensity={0.65} color="#7C5CFF" />
        <Core />
        <PointsCloud />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

