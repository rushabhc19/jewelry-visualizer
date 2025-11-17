import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import Jewelry from "./Jewelry";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#faf2e8" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          {/* Loads the jewelry model */}
          <Jewelry url="/models/jewelry.glb" />
        </Suspense>
        {/* Interactive orbit/zoom controls */}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        {/* A nice environment lighting */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}