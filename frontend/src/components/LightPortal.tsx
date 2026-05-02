"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

function StaticSacredGeometry() {
  const colors = {
    star: "#0055FF",      // Vibrant Blue Star
    innerRing: "#8B0000", // Maroon
    midRing: "#FFD700",   // Gold/Yellow
    outerRing: "#00008B", // Navy Blue
    center: "#FFFFFF",    // White Center
    sunburst: "#FFFFFF",  // White Rays
  };

  return (
    <group>
      {/* 1. CENTRAL WHITE ORB */}
      <mesh position={[0, 0, 0.5]}>
        <circleGeometry args={[0.5, 64]} />
        <meshBasicMaterial color={colors.center} />
      </mesh>

      {/* 2. SUNBURST RAYS (Static) */}
      {Array.from({ length: 24 }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI * 2) / 24]} position={[0, 0, 0.4]}>
          <planeGeometry args={[0.05, 0.3]} />
          <meshBasicMaterial color={colors.sunburst} transparent opacity={0.6} />
        </mesh>
      ))}

      {/* 3. THE 6-POINTED STAR (Static, No Tips) */}
      <group position={[0, 0, 0.3]}>
        {/* Triangle Up */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[1.8, 0.1, 3, 3]} />
          <meshBasicMaterial color={colors.star} />
        </mesh>
        {/* Triangle Down */}
        <mesh rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[1.8, 0.1, 3, 3]} />
          <meshBasicMaterial color={colors.star} />
        </mesh>
      </group>

      {/* 4. CONCENTRIC RINGS (Static) */}
      <group position={[0, 0, 0.1]}>
        {[
          { r: 2.8, w: 0.15, c: colors.innerRing },
          { r: 3.2, w: 0.2, c: colors.midRing },
          { r: 3.6, w: 0.25, c: colors.outerRing },
        ].map((ring, i) => (
          <mesh key={i}>
            <torusGeometry args={[ring.r, ring.w, 2, 100]} />
            <meshBasicMaterial color={ring.c} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function LightPortal() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0A0A0A]"> {/* Back to Dark Background */}
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <StaticSacredGeometry />
        </Suspense>
      </Canvas>
      
      {/* Dark Vignette for Immersion */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
    </div>
  );
}
