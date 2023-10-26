"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Dice from "./Dice";

export default function GameScene() {
  return (
    <div className="h-screen w-screen">
      {" "}
      {/* Tailwind CSS for full viewport */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Ambient light affects all objects in the scene equally. */}
        <ambientLight intensity={0.5} />

        {/* Point light shines from a specific position in all directions. */}
        <pointLight position={[10, 10, 10]} />

        {/* Add the Dice component here for testing */}
        {/* For now, you can hardcode a number for the dice */}
        <Dice number={3} />
      </Canvas>
    </div>
  );
}
