"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

function Orb() {
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ffffff"),
        roughness: 0.15,
        metalness: 0.45,
        emissive: new THREE.Color("#0b0f16"),
        emissiveIntensity: 0.35
      }),
    []
  );

  return (
    <Float speed={1.2} rotationIntensity={0.55} floatIntensity={0.85}>
      <mesh material={material}>
        <icosahedronGeometry args={[1.25, 3]} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduce(mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, []);

  if (reduce) {
    return (
      <div className="panel">
        <div className="panel__pad">
          <p className="p">
            <span className="accent">Secure</span> · <span className="accent">scalable</span> ·{" "}
            <span className="accent">intelligent</span>
          </p>
          <p className="p muted" style={{ marginTop: 10 }}>
            3D is disabled due to reduced‑motion settings.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="panel" style={{ height: 420 }}>
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 2]} intensity={0.9} color="#53F3C3" />
        <directionalLight position={[-4, -2, 3]} intensity={0.65} color="#7C5CFF" />
        <Orb />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

